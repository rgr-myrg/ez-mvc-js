$P.Model = function() {

	var proxies = {};

	return {

		facade: {},

		registerProxy: function( proxy ) {

			proxy.facade = this.facade;

			if( !proxies[ proxy.NAME ] ) {

				proxies[ proxy.NAME ] = proxy;

			}

			if( IS_FUNCTION( proxy.onRegister ) ){

				proxy.onRegister();

			}

		},

		retrieveProxy: function( key ) {

			return proxies[ key ] ? proxies[ key ] : null;

		},

		removeProxy: function( key ){

			if ( IS_FUNCTION( proxies[ key ].onRemove ) ){

				proxies[ key ].onRemove();

			}

			proxies[ key ] = null;

		}

	};

};
