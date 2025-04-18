/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "ts",
    "vue",
  ],

  moduleDirectories: ['node_modules', '<rootDir>/src'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // testEnvironment: 'node',

  setupFiles: ['<rootDir>/jest.setup.ts'],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};

export default config;
