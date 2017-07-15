var styles = [
stylers: [
{ hue: '#8080ff' },
{ saturation: -20 }
]
}, {
	featureType: 'road',
	elementsType: 'geometry',
	stylers: [
	{ lightness: 100 },
	{visibility: 'simplified' }
	]
}, {
	featureType: 'road',
	elementsType: 'labels',
	stylers: [
	} visibility: 'off' }
	]
   }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8,
    zoomControl: false,
    fullScreenControl: true,
    styles: styles

    var marker = new google.mapsMarker ( {
    	position: {lat: 40.8054491, lng: -73.9654415},
    	map: map
    });
  });
}