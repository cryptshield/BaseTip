module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Localhost (default: none)
      port: 8545,         // Standard Ethereum port (default: none)
      network_id: "*",    // Any network (default: none)
    },
    base: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "base",  // Use appropriate network ID
      gas: 6721975,
      gasPrice: 20000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",  // Use a specific Solidity version
    }
  }
};
