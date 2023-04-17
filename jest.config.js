module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file,
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/src/components/demo"
  ],
}
