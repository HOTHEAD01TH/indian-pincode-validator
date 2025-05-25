"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('IndianPincodeValidator', () => {
    describe('Basic Validation', () => {
        test('validates correct pincode format', () => {
            expect((0, index_1.validate)('110001')).toEqual({ valid: true });
        });
        test('rejects invalid pincode format', () => {
            expect((0, index_1.validate)('123')).toEqual({
                valid: false,
                error: 'Pincode must be exactly 6 digits, got 3'
            });
        });
        test('rejects pincode starting with 0', () => {
            expect((0, index_1.validate)('012345')).toEqual({
                valid: false,
                error: 'Pincode cannot start with 0'
            });
        });
        test('rejects non-numeric pincode', () => {
            expect((0, index_1.validate)('123ABC')).toEqual({
                valid: false,
                error: 'Pincode must contain only digits'
            });
        });
    });
    describe('Location Details', () => {
        test('returns location details for valid pincode', () => {
            const details = (0, index_1.getDetails)('110001');
            expect(details.valid).toBe(true);
            expect(details.pincode).toBe('110001');
            expect(details.city).toBeDefined();
            expect(details.state).toBeDefined();
        });
        test('returns error for invalid pincode', () => {
            const details = (0, index_1.getDetails)('123');
            expect(details.valid).toBe(false);
            expect(details.error).toBeDefined();
        });
    });
    describe('COD Availability', () => {
        test('checks COD availability for valid pincode', () => {
            const cod = (0, index_1.checkCOD)('110001');
            expect(cod.pincode).toBe('110001');
            expect(typeof cod.codAvailable).toBe('boolean');
            expect(typeof cod.maxCodAmount).toBe('number');
        });
        test('handles invalid pincode for COD check', () => {
            const cod = (0, index_1.checkCOD)('123');
            expect(cod.codAvailable).toBe(false);
            expect(cod.maxCodAmount).toBe(0);
        });
    });
    describe('Courier Services', () => {
        test('returns courier services for valid pincode', () => {
            const couriers = (0, index_1.getCouriers)('110001');
            expect(couriers.pincode).toBe('110001');
            expect(Array.isArray(couriers.services)).toBe(true);
            expect(typeof couriers.totalServices).toBe('number');
        });
        test('handles invalid pincode for courier services', () => {
            const couriers = (0, index_1.getCouriers)('123');
            expect(couriers.services).toEqual([]);
            expect(couriers.totalServices).toBe(0);
        });
    });
    describe('Delivery Availability', () => {
        test('checks delivery availability for valid pincode', () => {
            const delivery = (0, index_1.checkDelivery)('110001');
            expect(delivery.available).toBeDefined();
            expect(typeof delivery.available).toBe('boolean');
        });
        test('checks specific courier availability', () => {
            const delivery = (0, index_1.checkDelivery)('110001', 'DTDC');
            expect(delivery.available).toBeDefined();
            expect(delivery.courier).toBe('DTDC');
        });
    });
    describe('Bulk Validation', () => {
        test('validates multiple pincodes', () => {
            const results = (0, index_1.validateMultiple)(['110001', '400001', '123']);
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBe(3);
            expect(results[0].valid).toBe(true);
            expect(results[2].valid).toBe(false);
        });
    });
    describe('Distance Estimation', () => {
        test('calculates distance between pincodes', () => {
            const distance = (0, index_1.getDistance)('110001', '400001');
            expect(distance.distanceKm).toBeGreaterThan(0);
            expect(distance.estimatedDeliveryDays).toBeGreaterThan(0);
        });
        test('handles invalid pincodes in distance calculation', () => {
            expect(() => (0, index_1.getDistance)('123', '456')).toThrow();
        });
    });
    describe('Search Functions', () => {
        test('finds nearby pincodes', () => {
            const nearby = (0, index_1.findNearbyPincodes)('110001', 50);
            expect(Array.isArray(nearby)).toBe(true);
            expect(nearby.length).toBeLessThanOrEqual(20);
        });
        test('searches by city', () => {
            const results = (0, index_1.searchByCity)('Mumbai');
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].city.toLowerCase()).toContain('mumbai');
        });
        test('searches by state', () => {
            const results = (0, index_1.searchByState)('Maharashtra');
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].state.toLowerCase()).toContain('maharashtra');
        });
    });
    describe('City Tier Functions', () => {
        test('gets metro cities', () => {
            const metros = (0, index_1.getMetroCities)();
            expect(Array.isArray(metros)).toBe(true);
            expect(metros.length).toBeGreaterThan(0);
            expect(metros[0].isMetro).toBe(true);
        });
        test('gets cities by tier', () => {
            const tier1Cities = (0, index_1.getTierCities)(1);
            expect(Array.isArray(tier1Cities)).toBe(true);
            expect(tier1Cities.length).toBeGreaterThan(0);
            expect(tier1Cities[0].tier).toBe(1);
        });
    });
});
//# sourceMappingURL=index.test.js.map