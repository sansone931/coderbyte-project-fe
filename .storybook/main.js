module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: [
    {
      directory: '../src',
      files: '**/*.stories.*',
      titlePrefix: 'App',
    },
  ],
  addons: ['@storybook/addon-essentials'],
};
