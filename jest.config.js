module.exports = {
  testEnvironment: 'node',
  roots: ['src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  collectCoverage: true
}
