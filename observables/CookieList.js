import Cookie from 'models/cookie';

var CookieList = can.List.extend({
    init: function(){
        this.replace(Cookie.findAll());
    }
});

export { CookieList as default };
