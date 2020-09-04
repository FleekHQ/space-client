module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resetMocks: true,
  testMatch: ['**/__tests__/**/*.+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/{!(definitions),}',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
};
