module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
