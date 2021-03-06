
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var corhttpd_exports = {};

corhttpd_exports.startServer = function(options, success, error) {
    var defaults = {
        'www_root': '',
        'port': 8888,
        'localhost_only': false,
        'mimetypes': {
            'html': 'text/html',
            'js': 'text/javascript',
            'css': 'text/css',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg'
        },
        'serve_order': 0		// 0 = FileThenWWW, 1 = WWWThenFile
    };
	  
	  // Merge optional settings into defaults.
	  for (var key in defaults) {
	    if (typeof options[key] !== 'undefined') {
	      defaults[key] = options[key];
	    }
	  }
			  
  exec(success, error, "CorHttpd", "startServer", [ defaults ]);
};

corhttpd_exports.stopServer = function(success, error) {
	  exec(success, error, "CorHttpd", "stopServer", []);
};

corhttpd_exports.getURL = function(success, error) {
	  exec(success, error, "CorHttpd", "getURL", []);
};

corhttpd_exports.getLocalPath = function(success, error) {
	  exec(success, error, "CorHttpd", "getLocalPath", []);
};

module.exports = corhttpd_exports;

