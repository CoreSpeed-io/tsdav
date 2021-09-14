module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'ts-jest',
  },
  setupFiles: ['dotenv/config'],
  testTimeout: 120000,
};
