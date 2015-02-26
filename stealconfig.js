steal.config({
  map: {
    "jquery/jquery": "jquery"
  },
  paths: {
    "can/*": "lib/canjs/*.js",
    "bootstrap/*": "lib/bootstrap/js/*.js",
    "jquery": "lib/jquery/dist/jquery.js",
    "faker": "lib/faker/build/build/faker.js"
  },
  meta: {
    jquery: {
      exports: "jQuery",
      format: "global"
    }
  },
  ext: {
    stache: "can/view/stache/system"
  }
});