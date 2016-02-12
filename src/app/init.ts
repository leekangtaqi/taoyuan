declare var require;
declare var applicationContext;
export = function(){
    global['_'] = require('underscore');
    global['Controller'] = function (target){
        
    }
    global['applicationContext'] = require('../context').context;
}