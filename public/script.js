$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

});

/* google map*/
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var infowindow;

function atmbutton() {
  var pyrmont = {lat: 5.333369, lng: 100.306485};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 1000,
    type: ['atm']
  }, callback);
}

function bankbutton() {
  var pyrmont = {lat: 5.333369, lng: 100.306485};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 1000,
    type: ['bank']
  }, callback);
}

function barbutton() {
  var pyrmont = {lat: 5.333369, lng: 100.306485};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 1000,
    type: ['bar']
  }, callback);
}

function clubbutton() {
  var pyrmont = {lat: 5.333369, lng: 100.306485};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 1000,
    type: ['night_club']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}