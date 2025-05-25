# Indian Pincode Validator

A comprehensive npm package for validating and working with Indian postal codes (pincodes). This package provides detailed validation, location information, delivery estimates, and more.

## Installation

```bash
npm install indian-pincode-validator
```

## Basic Usage

```javascript
const { validate, getDetails, checkCOD, getCouriers } = require('indian-pincode-validator');

// Basic validation
const validation = validate('110001');
console.log(validation);
// Output: { valid: true }

// Get detailed location information
const details = getDetails('110001');
console.log(details);
// Output: {
//   valid: true,
//   pincode: '110001',
//   city: 'New Delhi',
//   state: 'Delhi',
//   region: 'North',
//   tier: 1,
//   isMetroCity: true,
//   ...
// }

// Check COD availability
const codInfo = checkCOD('110001');
console.log(codInfo);
// Output: {
//   pincode: '110001',
//   codAvailable: true,
//   maxCodAmount: 50000,
//   codCharges: 25
// }

// Get available courier services
const couriers = getCouriers('110001');
console.log(couriers);
// Output: {
//   pincode: '110001',
//   services: ['DTDC', 'Delhivery', 'BlueDart'],
//   deliveryDays: 2,
//   expressDelivery: true,
//   ...
// }
```

## Advanced Usage

### Bulk Validation
```javascript
const { validateMultiple } = require('indian-pincode-validator');

const pincodes = ['110001', '400001', '700001'];
const results = validateMultiple(pincodes);
console.log(results);
```

### Find Nearby Pincodes
```javascript
const { findNearbyPincodes } = require('indian-pincode-validator');

const nearby = findNearbyPincodes('110001', 50); // 50km radius
console.log(nearby);
```

### Search by City or State
```javascript
const { searchByCity, searchByState } = require('indian-pincode-validator');

const cityResults = searchByCity('Mumbai');
const stateResults = searchByState('Maharashtra');
```

### Get Metro Cities
```javascript
const { getMetroCities } = require('indian-pincode-validator');

const metros = getMetroCities();
console.log(metros);
```

### Calculate Delivery Estimates
```javascript
const { getDistance } = require('indian-pincode-validator');

const deliveryInfo = getDistance('110001', '400001');
console.log(deliveryInfo);
// Output: {
//   distanceKm: 1400,
//   estimatedDeliveryDays: 3,
//   estimatedShippingCost: 150,
//   expressDeliveryAvailable: true,
//   ...
// }
```

## Advanced Instance Usage

For more advanced usage, you can create your own instance:

```javascript
const { IndianPincodeValidator } = require('indian-pincode-validator');

const validator = new IndianPincodeValidator();

// Use instance methods
const customValidation = validator.isValidFormat('110001');
const customDetails = validator.getLocationDetails('110001');
```

## Available Methods

### Core Methods
- `validate(pincode)`: Basic pincode validation
- `getDetails(pincode)`: Get detailed location information
- `checkCOD(pincode)`: Check COD availability
- `getCouriers(pincode)`: Get available courier services
- `checkDelivery(pincode, courier)`: Check delivery availability for specific courier
- `validateMultiple(pincodes)`: Bulk validation of multiple pincodes
- `getDistance(from, to)`: Calculate delivery estimates between pincodes

### Search & Discovery Methods
- `findNearbyPincodes(pincode, radius)`: Find pincodes within radius
- `searchByCity(cityName)`: Search pincodes by city
- `searchByState(stateName)`: Search pincodes by state
- `getMetroCities()`: Get list of metro cities
- `getTierCities(tier)`: Get cities by tier (1, 2, or 3)

## Response Formats

### Validation Response
```javascript
{
  valid: boolean,
  error?: string
}
```

### Location Details Response
```javascript
{
  valid: boolean,
  pincode: string,
  city: string,
  state: string,
  region: string,
  tier: number,
  isMetroCity: boolean,
  coordinates?: {
    latitude: number,
    longitude: number
  },
  // ... additional details
}
```

### COD Response
```javascript
{
  pincode: string,
  codAvailable: boolean,
  reason?: string,
  maxCodAmount: number,
  codCharges: number
}
```

### Courier Services Response
```javascript
{
  pincode: string,
  services: string[],
  totalServices: number,
  deliveryDays: number,
  expressDelivery: boolean,
  internationalCouriers: string[],
  domesticCouriers: string[],
  tier: number,
  serviceLevel: string
}
```

## Error Handling

The package provides detailed error messages for various scenarios:

```javascript
// Invalid format
validate('12345'); // { valid: false, error: "Pincode must be exactly 6 digits, got 5" }

// Invalid first digit
validate('023456'); // { valid: false, error: "Pincode cannot start with 0" }

// Non-existent pincode
getDetails('999999'); // { valid: true, message: "Exact location data not available in database..." }
```

## Best Practices

1. Always validate pincodes before processing
2. Use bulk validation for multiple pincodes
3. Check COD availability before offering COD
4. Consider tier and region for delivery estimates
5. Use appropriate courier services based on location

## Limitations

1. Database may not contain all pincodes
2. Delivery estimates are approximate
3. Courier service availability may change
4. COD availability may vary by courier
5. Distance calculations are approximate

## Contributing

Feel free to contribute to this package by:
1. Reporting bugs
2. Suggesting new features
3. Improving documentation
4. Adding more pincode data
5. Enhancing validation rules

## License

MIT License 