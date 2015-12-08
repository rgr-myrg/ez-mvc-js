$P.Facade = function( options ) {

	var	model = new $P.Model(),

		view = new $P.View(),

		controller = new $P.Controller(),

		initializeModel = function( app ) {

			model.facade = app;

		},

		initializeView = function( app ) {

			view.facade = app;

		},

		initializeController = function( app ) {

			controller.facade = app;

			app.registerMediator( Controller );

		};

	return {

		CMD_STARTUP: "CMD_STARTUP",

		registerProxy: function( proxy ) {

			model.registerProxy( proxy );

		},

		registerMediator: function( mediator ) {

			view.registerMediator( mediator );

		},

		registerCommand: function( key, command ) {

			controller.registerCommand( key, command );

		},

		retrieveProxy: function( key ) {

			return model.retrieveProxy( key );

		},

		retrieveMediator: function( key ) {

			return view.retrieveMediator( key );

		},

		removeProxy: function( key ) {

			model.removeProxy( key );

		},

		removeMediator: function( key ) {

			view.removeMediator( key );

		},

		sendNotification: function( name, body, type ) {

			view.sendNotification({

				name: name,
				body: body,
				type: type

			});

		},

		initializeFacade: function() {

			initializeModel( this );
			initializeView( this );
			initializeController( this );

		}

	};

};
