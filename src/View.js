$P.View = function() {

	return $P.Observable(

		(function() {

			var mediators = {};

			return {

				facade: {},

				notification: {},

				registerMediator: function( mediator ) {

					mediator.facade = this.facade;

					if( !mediators[ mediator.NAME ] ) {

						mediators[ mediator.NAME ] = mediator;

						this.addObserver( mediator );

					}

				},

				retrieveMediator: function( key ) {

					return mediators[ key ] ? mediators[ key ] : null;

				},

				removeMediator: function( key ) {

					if( IS_FUNCTION( mediators[ key ].onRemove ) ) {

						mediators[ key ].onRemove();

					}

					mediators[ key ] = null;

				},

				notifyObservers: function( eventName ) {

					var size = this.observers.length;

					for ( var x = 0; x < size; x++ ) {

						var	notices = this.observers[ x ].listNotificationInterests(),
							deliver = false;

						for (var i = 0, l = notices.length; i < l; i++ ) {

							if( notices[ i ] === this.notification.name ) {

								deliver = true;
								break;

							}

						}

						if( deliver ){

							this.observers[ x ].notification = this.notification;
							this.observers[ x ].notify( eventName, this );

						}

					}

				},

				sendNotification: function( notification ) {

					this.notification = notification;

					this.notifyObservers( "handleNotification" );

				}

			};

		})()

	);
