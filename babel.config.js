module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          app: './app',
          components: './app/components',
          containers: './app/containers',
          localization: './app/localization',
          theme: './app/theme',
          utils: './app/utils',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
