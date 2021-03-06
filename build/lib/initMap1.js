if (document.getElementById("map1")) {
	function initMap1() {

		var styleMap = [
			{
				"featureType": "all",
				"elementType": "all",
				"stylers": [
					{
						"hue": "#CC0000"
                    }
                ]
            }
        ];

		mapDraw();

		function mapDraw() {
			var mainAcadLatLng = {
				lat: 50.473750,
				lng: 30.395400
			};
			//    var mainAcadLatLng = {lat: 50.400322, lng: 30.520159};

			var map = new google.maps.Map(document.getElementById('map1'), {
				zoom: 17,
				disableDefaultUI: true,
				center: mainAcadLatLng,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				//        draggable: false,
				styles: styleMap
			});

			var imageMA = {
				url: 'icons/flag.png',
				size: new google.maps.Size(74, 103),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 66),
				scaledSize: new google.maps.Size(37, 51)
			};
			//    var imageMA = {
			//        path: google.maps.SymbolPath.CIRCLE,
			//        scale: 1
			//    };
			var shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: 'poly'
			};


			var mainAcademyCoordinate = {
				lat: 50.473750,
				lng: 30.395400

			};
			var markerMainAcademy = new google.maps.Marker({
				position: mainAcademyCoordinate,
				map: map,
				icon: imageMA,
				draggable: false,
				//        shape: shape,
				animation: google.maps.Animation.BOUNCE,
				title: 'Мебельный салон "Элит"'
			});

			var infowindow = new google.maps.InfoWindow({
				content: 'Мебельный салон "Элит" '
			});

			markerMainAcademy.addListener('click', function () {
				infowindow.open(map, markerMainAcademy);

			});

			google.maps.event.addDomListener(window, 'resize', function () {
				//        if (window.innerWidth < 690) {
				//            mainAcadLatLng = mainAcademyCoordinate;
				//            console.log(window.innerWidth);
				//        }

				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");

				if (window.innerWidth < 690) {
					map.setCenter(mainAcademyCoordinate);
				} else {
					map.setCenter(mainAcadLatLng);
				}

			});
		}
		mapDraw2();

		function mapDraw2() {
			var mainAcadLatLng = {
				lat: 47.597175,
				lng: 37.498171
				
			
			};
			//    var mainAcadLatLng = {lat: 50.400322, lng: 30.520159};

			var map = new google.maps.Map(document.getElementById('map2'), {
				zoom: 17,
				disableDefaultUI: true,
				center: mainAcadLatLng,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				//        draggable: false,
				styles: styleMap
			});

			var imageMA = {
				url: 'icons/flag.png',
				size: new google.maps.Size(74, 103),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 66),
				scaledSize: new google.maps.Size(37, 51)
			};
			//    var imageMA = {
			//        path: google.maps.SymbolPath.CIRCLE,
			//        scale: 1
			//    };
			var shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: 'poly'
			};


			var mainAcademyCoordinate = {
				lat: 47.597175,
				lng: 37.498171

			};
			var markerMainAcademy = new google.maps.Marker({
				position: mainAcademyCoordinate,
				map: map,
				icon: imageMA,
				draggable: false,
				//        shape: shape,
				animation: google.maps.Animation.BOUNCE,
				title: 'Мебельный салон "Элит" '
			});

			var infowindow = new google.maps.InfoWindow({
				content: 'Мебельный салон "Элит" '
			});

			markerMainAcademy.addListener('click', function () {
				infowindow.open(map, markerMainAcademy);

			});

			google.maps.event.addDomListener(window, 'resize', function () {
				//        if (window.innerWidth < 690) {
				//            mainAcadLatLng = mainAcademyCoordinate;
				//            console.log(window.innerWidth);
				//        }

				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");

				if (window.innerWidth < 690) {
					map.setCenter(mainAcademyCoordinate);
				} else {
					map.setCenter(mainAcadLatLng);
				}

			});
		}




	}
}
