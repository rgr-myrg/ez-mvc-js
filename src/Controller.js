$P.Controller = function() {

	return $P.Observer(

		(function() {

			var	commands = {},
				notifications = [];

			return {
				facade: {},

				NAME: "Controller",

				registerCommand: function( key, command ) {

					command.facade = this.facade;

					if( !commands[ key ] ) {

						commands[ key ] = command;
						notifications.push( key );

					}

				},

				listNotificationInterests: function() {

					return notifications;

				},

				handleNotification: function() {

					var command = commands[ this.notification.name ];

					if ( IS_OBJECT( command ) && IS_FUNCTION( command.execute ) ) {

						command.execute( this.notification );

					}

				}

			};

		})

	);

};
