const {defaults} = require('jest-config');

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  coverageThreshold: {
    "global": {
      "lines": 45,
      "statements": 45
    }
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}"
  ],
  transform: {
    "^.+\\.(tsx|ts|js)?$": "babel-jest",
  },
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  },
  setupFilesAfterEnv: ["<rootDir>/enzume.config.js"]
};
