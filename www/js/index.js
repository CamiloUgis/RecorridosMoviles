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
    $('#rapidoIda1').bind('change', lineaRapido);
    $('#rapidoIda2').bind('change', lineaRapido);
    $('#rapidoIda3').bind('change', lineaRapido);
    $('#rapidoVuelta1').bind('change', lineaRapido);
    $('#rapidoVuelta2').bind('change', lineaRapido);
    $('#rapidoVuelta3').bind('change', lineaRapido);
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

                //Recorrido Ida
                var pointRapidoIda1 = new google.maps.LatLng(-36.62591678228322, -72.0678998529911);
                var pointRapidoIda2 = new google.maps.LatLng(-36.625593891505204, -72.07119092345238);
                var pointRapidoIda3 = new google.maps.LatLng(-36.63117325388117, -72.07284852862358);
                var pointRapidoIda4 = new google.maps.LatLng(-36.63037253688364, -72.07706227898598);
                var pointRapidoIda5 = new google.maps.LatLng(-36.6256670802001, -72.07567557692528);
                var pointRapidoIda6 = new google.maps.LatLng(-36.625408766849056, -72.08317503333092);
                var pointRapidoIda7 = new google.maps.LatLng(-36.628174827316855, -72.08303019404411);
                var pointRapidoIda8 = new google.maps.LatLng(-36.6288335010117, -72.08676382899284);
                var pointRapidoIda9 = new google.maps.LatLng(-36.62822218312979, -72.08803988993168);
                var pointRapidoIda10 = new google.maps.LatLng(-36.628867941311455, -72.09021247923374);


                var pointRapidoIda11 = new google.maps.LatLng(-36.626872531058424, -72.09546826779842);
                var pointRapidoIda12 = new google.maps.LatLng(-36.624329222933945, -72.09400109946728);
                var pointRapidoIda13 = new google.maps.LatLng(-36.623740472273916, -72.09791041910648);
                var pointRapidoIda14 = new google.maps.LatLng(-36.621225046320085, -72.09607981145382);
                var pointRapidoIda15 = new google.maps.LatLng(-36.62010023579941, -72.09550313651562);
                var pointRapidoIda16 = new google.maps.LatLng(-36.61918100046982, -72.09524162113667);
                var pointRapidoIda17 = new google.maps.LatLng(-36.61726176538231, -72.09622733294964);
                var pointRapidoIda18 = new google.maps.LatLng(-36.6098136474811, -72.09346398711205);
                var pointRapidoIda19 = new google.maps.LatLng(-36.60828927278529, -72.09976986050606);
                var pointRapidoIda20 = new google.maps.LatLng(-36.610646873456076, -72.10067057982087);
                
                
                var pointRapidoIda21 = new google.maps.LatLng(-36.60767133265258, -72.11289390921593);
                var pointRapidoIda22 = new google.maps.LatLng(-36.59778577060809, -72.1091978251934);
                var pointRapidoIda23 = new google.maps.LatLng(-36.60237665311492, -72.09060341119766);
                var pointRapidoIda24 = new google.maps.LatLng(-36.60096087303316, -72.0899174362421);
                var pointRapidoIda25 = new google.maps.LatLng(-36.60464400039528, -72.08156369626522);
                var pointRapidoIda26 = new google.maps.LatLng(-36.59441564780987, -72.07229599356651);
                
                
                
                
                
                //Recorrido Vuelta
                var pointRapidoVuelta1 = new google.maps.LatLng(-36.59441564780987, -72.07229599356651);
                var pointRapidoVuelta2 = new google.maps.LatLng(-36.60464400039528, -72.08156369626522);
                var pointRapidoVuelta3 = new google.maps.LatLng(-36.60551603929597, -72.08406955003738);
                var pointRapidoVuelta4 = new google.maps.LatLng(-36.60513492721144, -72.08645805716515);
                var pointRapidoVuelta5 = new google.maps.LatLng(-36.6039614346738, -72.08599671721458);
                var pointRapidoVuelta6 = new google.maps.LatLng(-36.60322287884069, -72.08869233727455);
                var pointRapidoVuelta7 = new google.maps.LatLng(-36.602878360581585, -72.08857163786888);
                var pointRapidoVuelta8 = new google.maps.LatLng(-36.60238095963067, -72.09060475230217);
                var pointRapidoVuelta9 = new google.maps.LatLng(-36.60219577923659, -72.09074959158897);
                var pointRapidoVuelta10 = new google.maps.LatLng(-36.597739472793705, -72.10952304303646);
                
                
                
                var pointRapidoVuelta11 = new google.maps.LatLng(-36.6039248300323, -72.11178615689278);
                var pointRapidoVuelta12 = new google.maps.LatLng(-36.6085347249833, -72.0931850373745);
                var pointRapidoVuelta13 = new google.maps.LatLng(-36.60977919866818, -72.09365710616112);
                var pointRapidoVuelta14 = new google.maps.LatLng(-36.608293578970944, -72.09975913167);
                var pointRapidoVuelta15 = new google.maps.LatLng(-36.61581396529315, -72.10258886218071);
                var pointRapidoVuelta16 = new google.maps.LatLng(-36.617282217382154, -72.09636613726616);
                var pointRapidoVuelta17 = new google.maps.LatLng(-36.61945225137916, -72.09517791867256);
                var pointRapidoVuelta18 = new google.maps.LatLng(-36.62373616695088, -72.09792450070381);
                var pointRapidoVuelta19 = new google.maps.LatLng(-36.62434321512527, -72.0940051227808);
                var pointRapidoVuelta20 = new google.maps.LatLng(-36.62686822591033, -72.09546558558941);
                
                
                var pointRapidoVuelta21 = new google.maps.LatLng(-36.62887009382969, -72.09017023444176);
                var pointRapidoVuelta22 = new google.maps.LatLng(-36.628235098346444, -72.08802983164787);
                var pointRapidoVuelta23 = new google.maps.LatLng(-36.62881628085604, -72.08666190505028);
                var pointRapidoVuelta24 = new google.maps.LatLng(-36.62818128492942, -72.08303824067116);
                var pointRapidoVuelta25 = new google.maps.LatLng(-36.62539585115878, -72.08318307995796);
                var pointRapidoVuelta26 = new google.maps.LatLng(-36.625675690630224, -72.07567825913429);
                var pointRapidoVuelta27 = new google.maps.LatLng(-36.62777660682968, -72.07627438008785);
                var pointRapidoVuelta28 = new google.maps.LatLng(-36.63036930816923, -72.0770575851202);
                var pointRapidoVuelta29 = new google.maps.LatLng(-36.63121630294644, -72.07264803349972);
                var pointRapidoVuelta30 = new google.maps.LatLng(-36.62566169868079, -72.07092069089413);
                var pointRapidoVuelta31 = new google.maps.LatLng(-36.62591355338212, -72.06789247691631);

                
                //Mostrar puntos en pantalla
                
                if(mostrarRapidoIda1==true){
                    requestDirections(pointRapidoIda1, pointRapidoIda2);
                    requestDirections(pointRapidoIda2, pointRapidoIda3);
                    requestDirections(pointRapidoIda3, pointRapidoIda4);
                    requestDirections(pointRapidoIda4, pointRapidoIda5);
                    requestDirections(pointRapidoIda5, pointRapidoIda6);
                    requestDirections(pointRapidoIda6, pointRapidoIda7);
                    requestDirections(pointRapidoIda7, pointRapidoIda8);
                    requestDirections(pointRapidoIda8, pointRapidoIda9);
                    requestDirections(pointRapidoIda9, pointRapidoIda10);
                    requestDirections(pointRapidoIda10, pointRapidoIda11);

                }
                
                if(mostrarRapidoIda2==true){
                    
                    requestDirections(pointRapidoIda11, pointRapidoIda12);
                    requestDirections(pointRapidoIda12, pointRapidoIda13);
                    requestDirections(pointRapidoIda13, pointRapidoIda14);
                    requestDirections(pointRapidoIda14, pointRapidoIda15);
                    requestDirections(pointRapidoIda15, pointRapidoIda16);
                    requestDirections(pointRapidoIda16, pointRapidoIda17);
                    requestDirections(pointRapidoIda17, pointRapidoIda18);
                    requestDirections(pointRapidoIda18, pointRapidoIda19);
                    requestDirections(pointRapidoIda19, pointRapidoIda20);
                    requestDirections(pointRapidoIda20, pointRapidoIda21);

                }
                if(mostrarRapidoIda3==true){
                    
                    requestDirections(pointRapidoIda21, pointRapidoIda22);
                    requestDirections(pointRapidoIda22, pointRapidoIda23);
                    requestDirections(pointRapidoIda23, pointRapidoIda4);
                    requestDirections(pointRapidoIda24, pointRapidoIda25);
                    requestDirections(pointRapidoIda25, pointRapidoIda26);
                }


                if(mostrarRapidoVuelta1==true){
                    requestDirections(pointRapidoVuelta1, pointRapidoVuelta2);
                    requestDirections(pointRapidoVuelta2, pointRapidoVuelta3);
                    requestDirections(pointRapidoVuelta3, pointRapidoVuelta4);
                    requestDirections(pointRapidoVuelta4, pointRapidoVuelta5);
                    requestDirections(pointRapidoVuelta5, pointRapidoVuelta6);
                    requestDirections(pointRapidoVuelta6, pointRapidoVuelta7);
                    requestDirections(pointRapidoVuelta7, pointRapidoVuelta8);
                    requestDirections(pointRapidoVuelta8, pointRapidoVuelta9);
                    requestDirections(pointRapidoVuelta9, pointRapidoVuelta10);
                    requestDirections(pointRapidoVuelta10, pointRapidoVuelta11);

                }
                    
                if(mostrarRapidoVuelta2==true){
                    requestDirections(pointRapidoVuelta11, pointRapidoVuelta12);
                    requestDirections(pointRapidoVuelta12, pointRapidoVuelta13);
                    requestDirections(pointRapidoVuelta13, pointRapidoVuelta14);
                    requestDirections(pointRapidoVuelta14, pointRapidoVuelta15);
                    requestDirections(pointRapidoVuelta15, pointRapidoVuelta16);
                    requestDirections(pointRapidoVuelta16, pointRapidoVuelta17);
                    requestDirections(pointRapidoVuelta17, pointRapidoVuelta18);
                    requestDirections(pointRapidoVuelta18, pointRapidoVuelta19);
                    requestDirections(pointRapidoVuelta19, pointRapidoVuelta20);
                    requestDirections(pointRapidoVuelta20, pointRapidoVuelta21);

                }
                    
                if(mostrarRapidoVuelta3==true){
                    requestDirections(pointRapidoVuelta21, pointRapidoVuelta22);
                    requestDirections(pointRapidoVuelta22, pointRapidoVuelta23);
                    requestDirections(pointRapidoVuelta23, pointRapidoVuelta24);
                    requestDirections(pointRapidoVuelta24, pointRapidoVuelta25);
                    requestDirections(pointRapidoVuelta25, pointRapidoVuelta26);
                    requestDirections(pointRapidoVuelta26, pointRapidoVuelta27);
                    requestDirections(pointRapidoVuelta27, pointRapidoVuelta28);
                    requestDirections(pointRapidoVuelta28, pointRapidoVuelta29);
                    requestDirections(pointRapidoVuelta29, pointRapidoVuelta30);
                    requestDirections(pointRapidoVuelta30, pointRapidoVuelta31);

                }


            },
        
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
    if (document.getElementById('rapidoIda1').checked) {
        mostrarRapidoIda1=true;
        mostrarRapidoIda2=false;
        mostrarRapidoIda3=false;
        mostrarRapidoVuelta1=false;
        mostrarRapidoVuelta2=false;
        mostrarRapidoVuelta3=false;
        geo();
    } else {
        if (document.getElementById('rapidoIda2').checked) {
            mostrarRapidoIda1=false;
            mostrarRapidoIda2=true;
            mostrarRapidoIda3=false;
            mostrarRapidoVuelta1=false;
            mostrarRapidoVuelta2=false;
            mostrarRapidoVuelta3=false;
            geo();
        }else{
            if(document.getElementById('rapidoIda3').checked){
                mostrarRapidoIda1=false;
                mostrarRapidoIda2=false;
                mostrarRapidoIda3=true;
                mostrarRapidoVuelta1=false;
                mostrarRapidoVuelta2=false;
                mostrarRapidoVuelta3=false;
                geo();
            }else{
                if(document.getElementById('rapidoVuelta1').checked){
                    mostrarRapidoIda1=false;
                    mostrarRapidoIda2=false;
                    mostrarRapidoIda3=false;
                    mostrarRapidoVuelta1=true;
                    mostrarRapidoVuelta2=false;
                    mostrarRapidoVuelta3=false;
                    geo();
                }else{
                    if(document.getElementById('rapidoVuelta2').checked){
                        mostrarRapidoIda1=false;
                        mostrarRapidoIda2=false;
                        mostrarRapidoIda3=false;
                        mostrarRapidoVuelta1=false;
                        mostrarRapidoVuelta2=true;
                        mostrarRapidoVuelta3=false;
                        geo();
                    }else{
                        if(document.getElementById('rapidoVuelta3').checked){
                            mostrarRapidoIda1=false;
                            mostrarRapidoIda2=false;
                            mostrarRapidoIda3=false;
                            mostrarRapidoVuelta1=false;
                            mostrarRapidoVuelta2=false;
                            mostrarRapidoVuelta3=true;
                            geo();
                        }else{
                            mostrarRapidoIda1=false;
                            mostrarRapidoIda2=false;
                            mostrarRapidoIda3=false;
                            mostrarRapidoVuelta1=false;
                            mostrarRapidoVuelta2=false;
                            mostrarRapidoVuelta3=false;
                            geo(); 
                        }
                    }
                } 
        
            }
       
        }
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
