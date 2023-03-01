module.exports = {
  ci: {
    collect: {
      url: ["https://mattb.tech", "https://mattb.tech/cv"],
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "csp-xss": "warn",
        "unused-javascript": "warn",
        "uses-responsive-images": "warn",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
