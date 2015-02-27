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
    "jquery-cookie": "lib/jquery-cookie/jquery.cookie.js"
  },
  meta: {
    jquery: {
      exports: "jQuery",
      format: "global"
    },
    "jquery-cookie": {
      deps: ["jquery"],
      format: "global"
    },
    // "app.stache": {
    //   deps: ['']
    //   // WARNING: meta deps will not load properly when using ES6 syntax
    //   // if you add `format: global` it MAY work, but not guaranteed.
    // }
  },
  ext: {
    stache: "can/view/stache/system"
  }
});
