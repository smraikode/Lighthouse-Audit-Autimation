function getConfigForAuditing(website, isMobile) {
  const config = {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: [
      	'performance',
      	'accessibility',
      	'best-practices',
      	'seo',
      	'pwa'
      ],
    },
  };

  return config;
}

module.exports = {
  getConfigForAuditing,
};