// app config
var app = {
	initialize: function() {
		document.addEventListener(
			'deviceready',
			this.onDeviceReady.bind(this),
			false
		)
	},
	onDeviceReady: function() {
		console.log('device ready');
	}
}

app.initialize();
var pictureOutput = document.getElementById('pictureOutput');
var coordsOutput = document.getElementById('coordsOutput');
var Latitude;
var Longitude;

// Take picture 
function takePicture() {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError, {
        enableHighAccuracy: true
    })
}
    
// Success callback for get geo coordinates
var onGeoSuccess = function(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    navigator.camera.getPicture(onCamSuccess, onCamError);
}

// Geo error callback
function onGeoError(error) {
	console.log(error.message)
}

// Success callback for taking picture
var onCamSuccess = function(picture) {
    pictureOutput.src = 'data:image/png;base64,' + picture;
    coordsOutput.innerHTML = 'Latitude: ' + Latitude + ', Longitude: ' + Longitude;
}

// Camera error callback
var onCamError = function(error) {
	console.log(error.message)
}
