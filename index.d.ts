declare module 'indian-pincode-validator' {
  export interface ValidationResponse {
    valid: boolean;
    error?: string;
  }

  export interface Coordinates {
    latitude: number;
    longitude: number;
  }

  export interface LocationDetails {
    valid: boolean;
    pincode: string;
    city: string;
    state: string;
    region: string;
    tier: number;
    isMetroCity: boolean;
    coordinates?: Coordinates;
    possibleStates?: string[];
    estimatedDeliveryDays?: number;
    message?: string;
    codAvailable?: boolean;
    courierServices?: string[];
  }

  export interface CODResponse {
    pincode: string;
    codAvailable: boolean;
    reason?: string;
    maxCodAmount: number;
    codCharges: number;
  }

  export interface CourierServicesResponse {
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

  export interface DeliveryResponse {
    available: boolean;
    courier?: string;
    deliveryDays?: number;
    estimatedCost?: number;
    reason?: string;
    alternatives?: string[];
    services?: string[];
    expressAvailable?: boolean;
    recommendedCourier?: string;
  }

  export interface DistanceResponse {
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

  export interface NearbyPincode {
    pincode: string;
    city: string;
    state: string;
    distanceKm: number;
    coordinates?: Coordinates;
  }

  export class IndianPincodeValidator {
    constructor();
    isValidFormat(pincode: string | number): ValidationResponse;
    getLocationDetails(pincode: string | number): LocationDetails;
    isCODAvailable(pincode: string | number): CODResponse;
    getCourierServices(pincode: string | number): CourierServicesResponse;
    isDeliveryAvailable(pincode: string | number, courierService?: string): DeliveryResponse;
    validateBulk(pincodes: (string | number)[]): Array<LocationDetails & { processingTime: string }>;
    getDistanceEstimate(fromPincode: string | number, toPincode: string | number): DistanceResponse;
    findNearbyPincodes(pincode: string | number, radiusKm?: number): NearbyPincode[];
    searchByCity(cityName: string): LocationDetails[];
    searchByState(stateName: string): LocationDetails[];
    getMetroCities(): LocationDetails[];
    getTierCities(tier: 1 | 2 | 3): LocationDetails[];
  }

  // Core validation functions
  export function validate(pincode: string | number): ValidationResponse;
  export function getDetails(pincode: string | number): LocationDetails;
  export function checkCOD(pincode: string | number): CODResponse;
  export function getCouriers(pincode: string | number): CourierServicesResponse;
  export function checkDelivery(pincode: string | number, courier?: string): DeliveryResponse;
  export function validateMultiple(pincodes: (string | number)[]): Array<LocationDetails & { processingTime: string }>;
  export function getDistance(from: string | number, to: string | number): DistanceResponse;

  // Search and discovery functions
  export function findNearbyPincodes(pincode: string | number, radius?: number): NearbyPincode[];
  export function searchByCity(cityName: string): LocationDetails[];
  export function searchByState(stateName: string): LocationDetails[];
  export function getMetroCities(): LocationDetails[];
  export function getTierCities(tier: 1 | 2 | 3): LocationDetails[];

  // Export instance for advanced usage
  export const validator: IndianPincodeValidator;
}
  