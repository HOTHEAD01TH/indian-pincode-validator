# Contributing to Indian Pincode Validator

We love your input! We want to make contributing as easy and transparent as possible.

## Development Process

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Add tests for new functionality
4. Make sure tests pass (`npm test`)
5. Commit your changes (`git commit -m 'Add AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## Adding New Pincodes

To add new pincodes to the database:

1. Update `data/pincodes.js`
2. Follow the existing data structure
3. Include all required fields: area, city, district, state, region, zone, etc.
4. Add coordinates if available
5. Update tests to cover new pincodes

## Reporting Bugs

Create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Node.js version and OS

## Feature Requests

We're always looking for new features that help Indian developers:
- New courier integrations
- Enhanced location intelligence
- Performance improvements
- Better TypeScript support
