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
    $('#rapido1').bind('change', lineaRapido);
    $('#rapido2').bind('change', lineaRapido);
    $('#rapido3').bind('change', lineaRapido);
    $('#rapido4').bind('change', lineaRapido);

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


                var pointRapidoOtherG = new google.maps.LatLng(-36.60595097847018, -72.10399568080902);
                var pointRapidoOtherH = new google.maps.LatLng(-36.60860362370549, -72.09332585334778);
                //variante dirección
                var pointRapido2A = new google.maps.LatLng(-36.60977273951406, -72.09364369511604);
                var pointRapido2B = new google.maps.LatLng(-36.608291425878136, -72.09976449608803);
                var pointRapido2C = new google.maps.LatLng(-36.61580535376147, -72.10259690880775);
                var pointRapido2D = new google.maps.LatLng(-36.61730589863834, -72.09636077284813);
                var pointRapido2E = new google.maps.LatLng(-36.61939843183017, -72.0951484143734);
                var pointRapido2F = new google.maps.LatLng(-36.623755540902636, -72.09791645407677);
                var pointRapido2G = new google.maps.LatLng(-36.62434321512527, -72.09399774670601);
                var pointRapido2H = new google.maps.LatLng(-36.626033022632164, -72.09490835666656);

                //variante dirección
                var pointRapido3A = new google.maps.LatLng(-36.62846111428764, -72.08824172616005);
                var pointRapido3B = new google.maps.LatLng(-36.62766467421417, -72.08750680088997);
                var pointRapido3C = new google.maps.LatLng(-36.628316894668366, -72.08619520068169);
                var pointRapido3D = new google.maps.LatLng(-36.628157607014025, -72.08531811833382);
                var pointRapido3E = new google.maps.LatLng(-36.627496774986106, -72.08577610552311);
                var pointRapido3F = new google.maps.LatLng(-36.627054961487765, -72.08333579823375);
                var pointRapido3G = new google.maps.LatLng(-36.625389931466685, -72.08317654207349);
                var pointRapido3H = new google.maps.LatLng(-36.625600349334015, -72.0695386826992);
                var pointRapido3I = new google.maps.LatLng(-36.62595552908568, -72.06791795790195);

                if (mostrarRapido1 == true) {
                    requestDirections(pointRapidoA, pointRapidoB);
                    requestDirections(pointRapidoB, pointRapidoC);
                    requestDirections(pointRapidoC, pointRapidoD);
                    requestDirections(pointRapidoOtherA, pointRapidoOtherB);
                    requestDirections(pointRapidoOtherB, pointRapidoOtherC);
                    requestDirections(pointRapidoOtherC, pointRapidoOtherD);
                    requestDirections(pointRapidoOtherD, pointRapidoOtherE);
                    requestDirections(pointRapidoOtherE, pointRapidoOtherF);
                    requestDirections(pointRapidoOtherF, pointRapidoOtherG);
                }
                if (mostrarRapido2 == true) {

                    requestDirections(pointRapidoOtherG, pointRapidoOtherH);
                    requestDirections(pointRapidoOtherH, pointRapido2A);
                    requestDirections(pointRapido2A, pointRapido2B);
                    requestDirections(pointRapido2B, pointRapido2C);
                    requestDirections(pointRapido2C, pointRapido2D);
                    requestDirections(pointRapido2D, pointRapido2E);
                    requestDirections(pointRapido2E, pointRapido2F);
                    requestDirections(pointRapido2F, pointRapido2G);
                    requestDirections(pointRapido2G, pointRapido2H);
                }
                if (mostrarRapido3 == true) {
                    requestDirections(pointRapido2H, pointRapido3A);
                    requestDirections(pointRapido3A, pointRapido3B);
                    requestDirections(pointRapido3B, pointRapido3C);
                    requestDirections(pointRapido3C, pointRapido3D);
                    requestDirections(pointRapido3D, pointRapido3E);
                    requestDirections(pointRapido3E, pointRapido3F);
                    requestDirections(pointRapido3F, pointRapido3G);
                    requestDirections(pointRapido3G, pointRapido3H);
                    requestDirections(pointRapido3H, pointRapido3I);
                }



                //requestDirections(pointRapido2E, pointRapidoOtherM);

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
    if (document.getElementById('rapido1').checked) {
        mostrarRapido1 = true;
        mostrarRapido2 = false;
        mostrarRapido3 = false;
        geo();
    } else {
        if (document.getElementById('rapido2').checked) {
            mostrarRapido2 = true;
            mostrarRapido1 = false;
            mostrarRapido3 = false;
            geo();
        } else {
            if (document.getElementById('rapido3').checked) {
                mostrarRapido3 = true;
                mostrarRapido2 = false;
                mostrarRapido1 = false;
                geo();
            } else {
                mostrarRapido1 = false;
                mostrarRapido2 = false;
                mostrarRapido3 = false;
                geo();
            }

        }
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

//Descarga de imagen
function init(){
  console.log('Inicio de descarga');
  window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

      console.log('file system open: ' + fs.name);

      // Make sure you add the domain name to the Content-Security-Policy <meta> element.
      var url = 'http://i.imgur.com/krdlB2M.jpg';
      // Parameters passed to getFile create a new file or return the file if it already exists.
      fs.root.getFile('downloaded-image.png', { create: true, exclusive: false }, function (fileEntry) {
          download(fileEntry, url, true);

      }, error);

  }, error);
}

function error(){
  console.log("Error");
}

function download(fileEntry, uri, readBinaryData) {

  var fileTransfer = new FileTransfer();
  var fileURL = fileEntry.toURL();

  fileTransfer.download(
      uri,
      fileURL,
      function (entry) {
          console.log("Successful download...");
          console.log("download complete: " + entry.toURL());
            displayImageByFileURL(entry);
      },
      function (error) {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("upload error code" + error.code);
      },
      null, // or, pass false
      {
          //headers: {
          //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
          //}
      }
  );
}

function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('imgRapido');
    elem.src = fileEntry.toURL();
}
