// jest.config.js
module.exports = {
	preset: 'jest-preset-angular',
	roots: ['<rootDir>/src/'],
	setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
	testMatch: ['**/+(*.)+(spec).+(ts)'],
	collectCoverage: true,
	coverageReporters: ['html', 'json-summary', 'text'],
	coverageDirectory: '<rootDir>/coverage/tests',
};
