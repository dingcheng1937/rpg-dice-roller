const defaultConfig = {
  // random number generator
  rng: {
    // defaults to nativeMath / Math.Random
    engine: undefined,
  },
};

const config = { ...defaultConfig };

export { config, defaultConfig };
