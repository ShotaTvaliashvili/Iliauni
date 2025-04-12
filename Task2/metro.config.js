const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  transformer: {
    // Custom transformer options if any
  },
  resolver: {
    // Custom resolver options if any
  },
  ...defaultConfig,
};