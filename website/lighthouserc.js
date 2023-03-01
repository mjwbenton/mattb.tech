module.exports = {
  ci: {
    collect: {
      url: ["https://mattb.tech"],
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
