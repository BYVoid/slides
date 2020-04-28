var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Bitcoin<br>比特幣',
    subtitle: '史上最瘋狂的貨幣',
  //  eventTitle: '',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Carbo Kuo',
    company: 'Tsinghua University',
    gplus: 'https://plus.google.com/112163558251413006250',
    twitter: '@byvoid',
    www: 'https://byvoid.com',
    github: 'http://github.com/BYVoid'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

require(['../js/order!../js/modernizr.custom.45394',
         '../js/order!../js/prettify/prettify',
         '../js/order!../js/hammer',
         '../js/order!../js/slide-controller',
         '../js/order!../js/slide-deck'], function(someModule) {

});

