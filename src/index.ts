// Types
interface PincodeData {
  city: string;
  state: string;
  region: string;
  zone: string;
  tier: number;
  isMetro: boolean;
  latitude?: number;
  longitude?: number;
  courierServices?: string[];
  deliveryDays?: number;
}

interface PincodeDatabase {
  [key: string]: PincodeData;
}

interface StateMapping {
  [key: string]: string[];
}

interface MetroTiers {
  [key: number]: string[];
}

interface ValidationResponse {
  valid: boolean;
  error?: string;
}

interface LocationDetails extends PincodeData {
  valid: boolean;
  pincode: string;
  possibleStates?: string[];
  estimatedDeliveryDays?: number;
  message?: string;
  codAvailable?: boolean;
  error?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

interface CODResponse {
  pincode: string;
  codAvailable: boolean;
  reason?: string | null;
  maxCodAmount: number;
  codCharges: number | null;
}

interface CourierServicesResponse {
  pincode: string;
  services: string[];
  totalServices: number;
  deliveryDays: number;
  expressDelivery: boolean;
  internationalCouriers: string[];
  domesticCouriers: string[];
  tier: number;
  serviceLevel: string;
}

interface DeliveryResponse {
  available: boolean;
  courier?: string;
  deliveryDays?: number | null;
  estimatedCost?: number | null;
  reason?: string | null;
  alternatives?: string[];
  services?: string[];
  expressAvailable?: boolean;
  recommendedCourier?: string;
}

interface DistanceResponse {
  from: LocationDetails;
  to: LocationDetails;
  distanceKm: number;
  estimatedDeliveryDays: number;
  estimatedShippingCost: number;
  sameCity: boolean;
  sameState: boolean;
  sameRegion: boolean;
  expressDeliveryAvailable: boolean;
  recommendedCourier: string;
}

interface NearbyPincode extends PincodeData {
  pincode: string;
  distanceKm: number;
}

const PINCODE_DATABASE: PincodeDatabase = require('./data/pincodes');

class IndianPincodeValidator {
  private pincodeData: PincodeDatabase;
  private stateMapping: StateMapping;
  private metroTiers: MetroTiers;

  constructor() {
    this.pincodeData = PINCODE_DATABASE;
    this.stateMapping = {
      "1": ["Delhi", "Haryana", "Punjab", "Himachal Pradesh", "Jammu & Kashmir", "Chandigarh", "Uttarakhand"],
      "2": ["Uttar Pradesh", "Uttarakhand"],
      "3": ["Rajasthan", "Gujarat"],
      "4": ["Maharashtra", "Madhya Pradesh", "Chhattisgarh", "Goa"],
      "5": ["Andhra Pradesh", "Karnataka", "Telangana"],
      "6": ["Tamil Nadu", "Kerala", "Puducherry"],
      "7": ["West Bengal", "Odisha", "Assam", "Meghalaya", "Manipur", "Nagaland", "Tripura", "Mizoram", "Arunachal Pradesh", "Sikkim"],
      "8": ["Bihar", "Jharkhand"],
      "9": ["Assam", "Manipur", "Nagaland", "Mizoram", "Arunachal Pradesh", "Meghalaya", "Tripura", "Sikkim"]
    };
    this.metroTiers = {
      1: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"],
      2: ["Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Visakhapatnam", "Patna"],
      3: ["Agra", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad"]
    };
  }

  isValidFormat(pincode: string | number): ValidationResponse {
    const pincodeStr = String(pincode).trim();
    
    if (!pincodeStr) {
      return { valid: false, error: "Pincode cannot be empty" };
    }

    if (!/^\d+$/.test(pincodeStr)) {
      return { valid: false, error: "Pincode must contain only digits" };
    }

    if (pincodeStr.length !== 6) {
      return { valid: false, error: `Pincode must be exactly 6 digits, got ${pincodeStr.length}` };
    }

    const firstDigit = pincodeStr[0];
    if (firstDigit === '0') {
      return { valid: false, error: "Pincode cannot start with 0" };
    }

    if (!this.stateMapping[firstDigit]) {
      return { valid: false, error: `Invalid pincode: First digit '${firstDigit}' is not valid for Indian pincodes` };
    }

    return { valid: true };
  }

  getLocationDetails(pincode: string | number): LocationDetails {
    const validation = this.isValidFormat(pincode);
    if (!validation.valid) {
      return { ...validation, pincode: String(pincode).trim(), city: '', state: '', region: '', zone: '', tier: 3, isMetro: false };
    }

    const pincodeStr = String(pincode).trim();
    const locationData = this.pincodeData[pincodeStr];

    if (locationData) {
      return {
        valid: true,
        pincode: pincodeStr,
        ...locationData,
        tier: locationData.tier,
        coordinates: locationData.latitude && locationData.longitude ? {
          latitude: locationData.latitude,
          longitude: locationData.longitude
        } : undefined
      };
    }

    const firstDigit = pincodeStr[0];
    const possibleStates = this.stateMapping[firstDigit];
    const region = this.getRegionFromFirstDigit(firstDigit);
    const zone = this.getZoneFromFirstDigit(firstDigit);

    return {
      valid: true,
      pincode: pincodeStr,
      city: '',
      state: '',
      region,
      zone,
      tier: 3,
      isMetro: false,
      possibleStates,
      estimatedDeliveryDays: this.getEstimatedDeliveryDays(region),
      message: "Exact location data not available in database, but pincode format is valid",
      codAvailable: region !== "Northeast",
      courierServices: region === "Northeast" ? ["DTDC"] : ["DTDC", "Delhivery"]
    };
  }

  isCODAvailable(pincode: string | number): CODResponse {
    const locationData = this.getLocationDetails(pincode);
    
    if (!locationData.valid) {
      return {
        pincode: String(pincode).trim(),
        codAvailable: false,
        reason: locationData.error || "Invalid pincode",
        maxCodAmount: 0,
        codCharges: null
      };
    }

    const codAvailable = locationData.codAvailable !== undefined ? locationData.codAvailable : true;
    let reason: string | null = null;

    if (!codAvailable) {
      if (locationData.region === "Northeast") {
        reason = "COD service limited in Northeast region due to connectivity issues";
      } else if (locationData.state === "Jammu & Kashmir") {
        reason = "COD service limited in J&K due to security restrictions";
      } else if (locationData.state === "Andaman & Nicobar Islands") {
        reason = "COD not available for island territories";
      } else {
        reason = "COD not serviceable in this specific area";
      }
    }

    return {
      pincode: String(pincode).trim(),
      codAvailable,
      reason,
      maxCodAmount: codAvailable ? (locationData.tier === 1 ? 50000 : locationData.tier === 2 ? 25000 : 10000) : 0,
      codCharges: codAvailable ? (locationData.tier === 1 ? 25 : locationData.tier === 2 ? 35 : 50) : null
    };
  }

  getCourierServices(pincode: string | number): CourierServicesResponse {
    const locationData = this.getLocationDetails(pincode);
    
    if (!locationData.valid) {
      return {
        pincode: String(pincode).trim(),
        services: [],
        totalServices: 0,
        deliveryDays: 0,
        expressDelivery: false,
        internationalCouriers: [],
        domesticCouriers: [],
        tier: 3,
        serviceLevel: "Basic"
      };
    }

    const services = locationData.courierServices || [];
    const deliveryDays = locationData.deliveryDays || this.getEstimatedDeliveryDays(locationData.region);

    return {
      pincode: String(pincode).trim(),
      services,
      totalServices: services.length,
      deliveryDays,
      expressDelivery: services.includes("BlueDart") || services.includes("FedEx"),
      internationalCouriers: services.filter((s: string) => ["FedEx", "DHL", "BlueDart"].includes(s)),
      domesticCouriers: services.filter((s: string) => ["DTDC", "Delhivery", "Ecom"].includes(s)),
      tier: locationData.tier || 3,
      serviceLevel: locationData.tier === 1 ? "Premium" : locationData.tier === 2 ? "Standard" : "Basic"
    };
  }

  isDeliveryAvailable(pincode: string | number, courierService: string | null = null): DeliveryResponse {
    const courierData = this.getCourierServices(pincode);
    
    if (!courierData.services) {
      return { available: false, reason: "Invalid pincode" };
    }

    if (!courierService) {
      return {
        available: courierData.services.length > 0,
        services: courierData.services,
        deliveryDays: courierData.deliveryDays,
        expressAvailable: courierData.expressDelivery,
        recommendedCourier: this.getRecommendedCourier(courierData.services, courierData.tier)
      };
    }

    const isAvailable = courierData.services.includes(courierService);
    return {
      available: isAvailable,
      courier: courierService,
      deliveryDays: isAvailable ? courierData.deliveryDays : null,
      estimatedCost: isAvailable ? this.getShippingCost(courierService, courierData.tier) : null,
      reason: isAvailable ? null : `${courierService} does not service this pincode`,
      alternatives: isAvailable ? [] : courierData.services.slice(0, 3)
    };
  }

  findNearbyPincodes(pincode: string | number, radiusKm: number = 50): NearbyPincode[] {
    const locationData = this.getLocationDetails(pincode);
    if (!locationData.valid || !locationData.coordinates) {
      return [];
    }

    const nearby: NearbyPincode[] = [];
    const centerLat = locationData.coordinates.latitude;
    const centerLng = locationData.coordinates.longitude;

    Object.entries(this.pincodeData).forEach(([pin, data]) => {
      if (pin === String(pincode).trim() || !data.latitude || !data.longitude) return;
      
      const distance = this.calculateDistance(centerLat, centerLng, data.latitude, data.longitude);
      if (distance <= radiusKm) {
        nearby.push({
          ...data,
          pincode: pin,
          distanceKm: Math.round(distance * 10) / 10
        });
      }
    });

    return nearby.sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 20);
  }

  searchByCity(cityName: string): LocationDetails[] {
    const cityLower = cityName.toLowerCase().trim();
    const results: LocationDetails[] = [];

    Object.entries(this.pincodeData).forEach(([pincode, data]) => {
      if (data.city.toLowerCase().includes(cityLower)) {
        results.push({ ...data, valid: true, pincode });
      }
    });

    return results.sort((a, b) => a.city.localeCompare(b.city));
  }

  searchByState(stateName: string): LocationDetails[] {
    const stateLower = stateName.toLowerCase().trim();
    const results: LocationDetails[] = [];

    Object.entries(this.pincodeData).forEach(([pincode, data]) => {
      if (data.state.toLowerCase().includes(stateLower)) {
        results.push({ ...data, valid: true, pincode });
      }
    });

    return results.sort((a, b) => a.city.localeCompare(b.city));
  }

  getMetroCities(): LocationDetails[] {
    const metros: LocationDetails[] = [];
    Object.entries(this.pincodeData).forEach(([pincode, data]) => {
      if (data.isMetro) {
        metros.push({ ...data, valid: true, pincode });
      }
    });
    return metros;
  }

  getTierCities(tier: 1 | 2 | 3): LocationDetails[] {
    const cities: LocationDetails[] = [];
    Object.entries(this.pincodeData).forEach(([pincode, data]) => {
      if (data.tier === tier) {
        cities.push({ ...data, valid: true, pincode });
      }
    });
    return cities.sort((a, b) => a.city.localeCompare(b.city));
  }

  validateBulk(pincodes: (string | number)[]): Array<LocationDetails & { processingTime: string }> {
    return pincodes.map(pincode => {
      const result = this.getLocationDetails(pincode);
      return {
        ...result,
        pincode: String(pincode).trim(),
        processingTime: new Date().toISOString()
      };
    });
  }

  getDistanceEstimate(fromPincode: string | number, toPincode: string | number): DistanceResponse {
    const fromData = this.getLocationDetails(fromPincode);
    const toData = this.getLocationDetails(toPincode);

    if (!fromData.valid || !toData.valid) {
      throw new Error("Invalid pincode(s)");
    }

    let distanceKm = 0;
    let estimatedDays = 1;
    let shippingCost = 50;

    if (fromData.coordinates && toData.coordinates) {
      distanceKm = this.calculateDistance(
        fromData.coordinates.latitude, fromData.coordinates.longitude,
        toData.coordinates.latitude, toData.coordinates.longitude
      );
    }

    const sameCity = fromData.city === toData.city;
    const sameState = fromData.state === toData.state;
    const sameRegion = fromData.region === toData.region;

    if (sameCity) {
      estimatedDays = 1;
      shippingCost = 40;
    } else if (sameState) {
      estimatedDays = 2;
      shippingCost = 70;
    } else if (sameRegion) {
      estimatedDays = 3;
      shippingCost = 100;
    } else {
      estimatedDays = 5;
      shippingCost = 150;
    }

    if (fromData.tier === 3 || toData.tier === 3) {
      estimatedDays += 1;
      shippingCost += 30;
    }

    if (fromData.region === "Northeast" || toData.region === "Northeast") {
      estimatedDays += 2;
      shippingCost += 50;
    }

    return {
      from: fromData,
      to: toData,
      distanceKm: Math.round(distanceKm),
      estimatedDeliveryDays: estimatedDays,
      estimatedShippingCost: shippingCost,
      sameCity,
      sameState,
      sameRegion,
      expressDeliveryAvailable: estimatedDays <= 2 && fromData.tier <= 2 && toData.tier <= 2,
      recommendedCourier: this.getRecommendedCourier(
        [...new Set([...(fromData.courierServices || []), ...(toData.courierServices || [])])],
        Math.max(fromData.tier || 3, toData.tier || 3)
      )
    };
  }

  private getRegionFromFirstDigit(firstDigit: string): string {
    const regionMap: { [key: string]: string } = {
      "1": "North", "2": "North", "3": "West", "4": "West",
      "5": "South", "6": "South", "7": "East", "8": "East", "9": "Northeast"
    };
    return regionMap[firstDigit] || "Unknown";
  }

  private getZoneFromFirstDigit(firstDigit: string): string {
    const zoneMap: { [key: string]: string } = {
      "1": "Northern", "2": "Northern", "3": "Western", "4": "Central",
      "5": "Southern", "6": "Southern", "7": "Eastern", "8": "Eastern", "9": "Northeastern"
    };
    return zoneMap[firstDigit] || "Unknown";
  }

  private getEstimatedDeliveryDays(region: string): number {
    const deliveryMap: { [key: string]: number } = {
      "North": 2, "South": 2, "East": 3, "West": 2, "Northeast": 5, "Central": 3
    };
    return deliveryMap[region] || 3;
  }

  private getRecommendedCourier(services: string[], tier: number): string {
    if (services.includes("FedEx") && tier <= 2) return "FedEx";
    if (services.includes("BlueDart")) return "BlueDart";
    if (services.includes("Delhivery")) return "Delhivery";
    if (services.includes("DTDC")) return "DTDC";
    return services[0] || "Not Available";
  }

  private getShippingCost(courier: string, tier: number): number {
    const baseCosts: { [key: string]: number } = {
      "FedEx": 200, "BlueDart": 150, "DHL": 180,
      "Delhivery": 80, "DTDC": 70, "Ecom": 60
    };
    const tierMultiplier: { [key: number]: number } = { 1: 1, 2: 1.2, 3: 1.5 };
    return Math.round((baseCosts[courier] || 80) * (tierMultiplier[tier] || 1.5));
  }

  private calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }
}

// Create default instance
const validator = new IndianPincodeValidator();

// Export main functions and class
export {
  IndianPincodeValidator,
  validator,
  validate,
  getDetails,
  checkCOD,
  getCouriers,
  checkDelivery,
  validateMultiple,
  getDistance,
  findNearbyPincodes,
  searchByCity,
  searchByState,
  getMetroCities,
  getTierCities
};

// Core validation functions
const validate = (pincode: string | number): ValidationResponse => validator.isValidFormat(pincode);
const getDetails = (pincode: string | number): LocationDetails => validator.getLocationDetails(pincode);
const checkCOD = (pincode: string | number): CODResponse => validator.isCODAvailable(pincode);
const getCouriers = (pincode: string | number): CourierServicesResponse => validator.getCourierServices(pincode);
const checkDelivery = (pincode: string | number, courier?: string): DeliveryResponse => validator.isDeliveryAvailable(pincode, courier || null);
const validateMultiple = (pincodes: (string | number)[]): Array<LocationDetails & { processingTime: string }> => validator.validateBulk(pincodes);
const getDistance = (from: string | number, to: string | number): DistanceResponse => validator.getDistanceEstimate(from, to);

// Search and discovery functions
const findNearbyPincodes = (pincode: string | number, radius?: number): NearbyPincode[] => validator.findNearbyPincodes(pincode, radius || 50);
const searchByCity = (cityName: string): LocationDetails[] => validator.searchByCity(cityName);
const searchByState = (stateName: string): LocationDetails[] => validator.searchByState(stateName);
const getMetroCities = (): LocationDetails[] => validator.getMetroCities();
const getTierCities = (tier: 1 | 2 | 3): LocationDetails[] => validator.getTierCities(tier);