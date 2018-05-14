var app = {
// Application Constructor
	initialize: function() {
		document.addEventListener(
			'deviceready',
			this.onDeviceReady.bind(this),
			false
		)
	},

// deviceready Event Handler
	onDeviceReady: function() {
		console.log('device ready');
	}
}

app.initialize();

var Latitude = undefined;
var Longitude = undefined;

// Take picture
function takePicture() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true
    })
}
    
// Success callback for get geo coordinates
var onSuccess = function(position) {
    console.log(
        'onMapSuccess called - latitude: ' +
            position.coords.latitude +
            ', longitude' +
            position.coords.longitude
    );
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
}


// Error callback
function onError(error) {
	console.log(error.message)
}
