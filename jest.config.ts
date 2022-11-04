export default {
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jest-environment-node',
	transform: {
		'^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }]
	}
}
