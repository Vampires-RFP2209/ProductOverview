// The file will be discovered automatically, if it is named jest.config.js
// https://jestjs.io/docs/configuration

/** @type {import('jest').Config} */
module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/server'],
  // The test environment that will be used for testing. The default environment in Jest is a Node.js environment
  testEnvironment: 'node',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/server/**/*.js'],

  // This will be used to configure minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  // An array of regexp pattern strings that are matched against all source file paths before transformation. If the file path matches any of the patterns, it will not be transformed
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  // Indicates whether each individual test should be reported during the run. All errors will also still be shown on the bottom after execution
  verbose: true,
}
