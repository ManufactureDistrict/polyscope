App.info({
  name: 'Polyscope',
  description: 'A mutant of Microscope with polymer elements.',
  author: 'Meteorpoly',
  email: 'meteorpoly@gmail.com',
  website: 'https://github.com/meteorpoly/polyscope',
  version: '0.1.1'
});

App.icons({
  // iOS
  'iphone': 'public/images/favicons/apple-touch-icon-60x60.png',
  'iphone_2x': 'public/images/favicons/apple-touch-icon-120x120.png',
  'ipad': 'public/images/favicons/apple-touch-icon-72x72.png',
  'ipad_2x': 'public/images/favicons/apple-touch-icon-144x144.png',

  // Android
  'android_ldpi': 'public/images/favicons/android-chrome-36x36.png',
  'android_mdpi': 'public/images/favicons/android-chrome-48x48.png',
  'android_hdpi': 'public/images/favicons/android-chrome-72x72.png',
  'android_xhdpi': 'public/images/favicons/android-chrome-96x96.png'
});

App.launchScreens({
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

