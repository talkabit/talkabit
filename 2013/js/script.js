$(function() {
	$('#timeline-wrapper article.entry:first').addClass('darker');

	$('.mosaic-wrapper').masonry({
        // options
        itemSelector: '.box',
        isFitWidth: true,
        columnWidth: 156
    });

	$.each($('header nav ul li a'), function(index, value) {
		if($(value).attr('href') === window.location.pathname) {
			$(value).addClass('active');
		}
	});
	//add active class to current page header link
	var pathname = window.location.pathname.replace('/','').replace('.html','');
	$("header ul li a#"+pathname).addClass('active');
	
	var map;
	initMap();

});

initMap = function() {
	mapOptions = {
		center: new google.maps.LatLng(41.177911,-8.595997),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: false,
		scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	addMarkersInit();

};

function addMarkersInit(){
	var FEUPmarker = [
		{"name": "FEUP", "pos": new google.maps.LatLng(41.177911,-8.595997) }
	];
	var restMarkers = [
		{"name": "Ja La Foste", "pos": new google.maps.LatLng(41.177255,-8.599572) },
		{"name": "Campus S. Joao", "pos": new google.maps.LatLng(41.180495,-8.604709) }
	];

	var hotMarkers = [
		{"name": "Hotel Portinari", "pos": new google.maps.LatLng(41.183353551787036, -8.596758842468262) }
	];
	addMarkers(0, FEUPmarker, 'blue');
	addMarkers(0, restMarkers, 'yellow');
	addMarkers(0, hotMarkers, 'orange');
};

function addMarkers(i, markers, col){

	new google.maps.Marker({
		position: markers[i].pos,
		title: markers[i].name,
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		icon: new google.maps.MarkerImage(
    	'./img/custom-marker-' + col +'.png',
    	new google.maps.Size(34,40),    // size of the image
    	new google.maps.Point(0,0), // origin, in this case top-left corner
    	new google.maps.Point(0, 38)    // anchor, i.e. the point half-way along the bottom of the image
		)
	});

	if( i < markers.length - 1){
		setTimeout(function(){addMarkers(i+1, markers, col);}, 800);
	}
}

log = function(foo) {
	console.log(foo);
};
	
