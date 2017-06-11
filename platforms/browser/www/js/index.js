// Initialize your app
var myApp = new Framework7();

var mostrarRapido = false;
var mostrarTrece = false;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener("deviceready", function () {
    $('#geo').bind('click', geo);
    $('#rapido').bind('change', lineaRapido);
    $('#linea13').bind('change', lineaTrece);
});

function geo() {
    myApp.showPreloader('Localizando... Espere unos segundos...');
    navigator.geolocation.getCurrentPosition(
            function (position) {
                $('#lat').html(position.coords.latitude);
                $('#lon').html(position.coords.longitude);
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: position.coords.latitude, lng: position.coords.longitude},
                    zoom: 16
                });
                var marker = new google.maps.Marker({
                    position: {lat: position.coords.latitude, lng: position.coords.longitude},
                    map: map,
                    title: 'Mi posición'
                });
                myApp.hidePreloader();
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer({
                    map: map
                });

//            <!--
                function renderDirections(result) {
                    var directionsRenderer = new google.maps.DirectionsRenderer;
                    directionsRenderer.setMap(map);
                    directionsRenderer.setDirections(result);
                }

                var directionsService = new google.maps.DirectionsService;
                function requestDirections(start, end) {
                    directionsService.route({
                        origin: start,
                        destination: end,
                        travelMode: google.maps.DirectionsTravelMode.WALKING
                    }, function (result) {
                        renderDirections(result);
                    });
                }

                //Línea rápido
                if (mostrarRapido == true) {

                    //una dirección
                    var pointRapidoA = new google.maps.LatLng(-36.59853514532111, -72.10611864924431);
                    var pointRapidoB = new google.maps.LatLng(-36.602383112888454, -72.0906101167202);
                    var pointRapidoC = new google.maps.LatLng(-36.600992095839864, -72.0898349583149);
                    var pointRapidoD = new google.maps.LatLng(-36.591398563173804, -72.06988535821438);
                    //Otra dirección
                    var pointRapidoOtherA = new google.maps.LatLng(-36.591388333742614, -72.069918718189);
                    var pointRapidoOtherB = new google.maps.LatLng(-36.605509579784794, -72.0840603299439);
                    var pointRapidoOtherC = new google.maps.LatLng(-36.60353294395833, -72.08758123219013);
                    var pointRapidoOtherD = new google.maps.LatLng(-36.60246278338412, -72.09026545286179);
                    var pointRapidoOtherE = new google.maps.LatLng(-36.5976867147853, -72.10915893316269);
                    var pointRapidoOtherF = new google.maps.LatLng(-36.603922676817554, -72.11179822683334);

                    requestDirections(pointRapidoA, pointRapidoB);
                    requestDirections(pointRapidoB, pointRapidoC);
                    requestDirections(pointRapidoC, pointRapidoD);

                    requestDirections(pointRapidoOtherA, pointRapidoOtherB);
                    requestDirections(pointRapidoOtherB, pointRapidoOtherC);
                    requestDirections(pointRapidoOtherC, pointRapidoOtherD);
                    requestDirections(pointRapidoOtherD, pointRapidoOtherE);
                    requestDirections(pointRapidoOtherE, pointRapidoOtherF);
                }

                if (mostrarRapido == true) {

                }
                //otro  método
//            myApp.popup('.popup-geo');
//            -->
            }
    ,
            function (error) {
                myApp.alert('Se ha producido un error, active GPS', 'APP_Recorrido');
                myApp.hidePreloader();
            }
    ,
            {
                maximumAge: 3000,
                timeout: 5000,
                enableHighAccuracy: true
            }
    );
}

function lineaRapido() {
    if (document.getElementById('rapido').checked) {
        mostrarRapido = true;
        geo();
    } else {
        mostrarRapido = false;
        geo();
    }
}

function lineaTrece() {
    if (document.getElementById('linea13').checked) {
        mostrarTrece = true;
        geo();
    } else {
        mostrarTrece = false;
        geo();
    }
}