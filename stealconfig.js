steal.config({
  map: {
    "jquery/jquery": "jquery"
  },
  paths: {
    "can/*": "lib/canjs/*.js",
    "bootstrap/*": "lib/bootstrap/js/*.js",
    "jquery": "lib/jquery/dist/jquery.js",
    // "jquerypp": "lib/jquery++/"
    "faker": "lib/faker/build/build/faker.js",
    "jquery-cookie": "lib/jquery-cookie/jquery-cookie.js"
  },
  meta: {
    jquery: {
      exports: "jQuery",
      format: "global"
    },
    // jquerypp: {
    //   deps: ['jquery']
    // }
  },
  ext: {
    stache: "can/view/stache/system"
  }
});
