module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!src/**/*.d.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: [
    "html",
    "text",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  roots: [
    "<rootDir>/src",
    // "<rootDir>/test"
  ],
  testEnvironment: "node",
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
};
