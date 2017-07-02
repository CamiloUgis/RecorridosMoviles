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
    $('#rapidoIda').bind('change', lineaRapido);
    $('#rapidoVuelta').bind('change', lineaRapido);

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

                //Línea Rápido Ida
                var coordenadasRapidoIda = [
                    {lat: -36.62591678228322, lng: -72.0678998529911},
                    {lat: -36.62561541759914, lng: -72.06952661275864},
                    {lat: -36.625593891505204, lng: -72.07119092345238},
                    {lat: -36.63117325388117, lng: -72.07284852862358},
                    {lat: -36.63037253688364, lng: -72.07706227898598},
                    {lat: -36.6256670802001, lng: -72.07567557692528},
                    {lat: -36.625408766849056, lng: -72.08317503333092},
                    {lat: -36.627072720179065, lng: -72.083325907588},
                    {lat: -36.62817052224152, lng: -72.08304360508919},
                    {lat: -36.62882704345378, lng: -72.0867745578289},
                    {lat: -36.62822218312979, lng: -72.08803988993168},
                    {lat: -36.62880228947675, lng: -72.08850793540478},
                    {lat: -36.628867941311455, lng: -72.09021247923374},
                    {lat: -36.626872531058424, lng: -72.09546826779842},
                    {lat: -36.624329222933945, lng: -72.09400109946728},
                    {lat: -36.623740472273916, lng: -72.09791041910648},
                    {lat: -36.621225046320085, lng: -72.09607981145382},
                    {lat: -36.61943072356408, lng: -72.09517523646355},
                    {lat: -36.61918100046982, lng: -72.09524162113667},
                    {lat: -36.617460903044666, lng: -72.09629707038403},
                    {lat: -36.61726176538231, lng: -72.09622733294964},
                    {lat: -36.6098136474811, lng: -72.09346398711205},
                    {lat: -36.60828927278529, lng: -72.09976986050606},
                    {lat: -36.610646873456076, lng: -72.10067057982087},
                    {lat: -36.60767133265258, lng: -72.11289390921593},
                    {lat: -36.59778577060809, lng: -72.1091978251934},
                    {lat: -36.60237665311492, lng: -72.09060341119766},
                    {lat: -36.60096087303316, lng: -72.0899174362421},
                    {lat: -36.60282022297362, lng: -72.08551123738289},
                    {lat: -36.6039097575278, lng: -72.08315022289753},
                    {lat: -36.60464400039528, lng: -72.08156369626522},
                    {lat: -36.604086320967035, lng: -72.08011999726295},
                    {lat: -36.60290204626116, lng: -72.07891836762428},
                    {lat: -36.59441564780987, lng: -72.07229599356651}           
                ];
                //Línea Rápido Vuelta

                var coordenadasRapidoVuelta = [
                    {lat: -36.59435319686095, lng: -72.07226078957319},
                    {lat: -36.60097271616822, lng: -72.07741901278496},
                    {lat: -36.60361261326646, lng: -72.07953125238419},
                    {lat: -36.604103546646776, lng: -72.08013743162155},
                    {lat: -36.60464400039528, lng: -72.08156369626522},
                    {lat: -36.60551603929597, lng: -72.08406955003738},
                    {lat: -36.60513492721144, lng: -72.08645805716515},
                    {lat: -36.6039614346738, lng: -72.08599671721458},
                    {lat: -36.60330470170112, lng: -72.0886467397213},
                    {lat: -36.60323149177746, lng: -72.08871111273766},
                    {lat: -36.60286005800602, lng: -72.08854950964451},
                    {lat: -36.60272548011122, lng: -72.08907321095467},
                    {lat: -36.602420794889895, lng: -72.09027417004108},
                    {lat: -36.602211928707256, lng: -72.09071673452854},
                    {lat: -36.60141198752993, lng: -72.09386564791203},
                    {lat: -36.60123757125925, lng: -72.09442622959614},
                    {lat: -36.598339188843205, lng: -72.10621520876884},
                    {lat: -36.597673794451204, lng: -72.10916832089424},
                    {lat: -36.59766518089394, lng: -72.10946537554264},
                    {lat: -36.59774162618103, lng: -72.10952840745449},
                    {lat: -36.60391298735044, lng: -72.11178950965405},
                    {lat: -36.6085347249833, lng: -72.0931850373745},
                    {lat: -36.60977919866818, lng: -72.09365710616112},
                    {lat: -36.608293578970944, lng: -72.09975913167},
                    {lat: -36.61581396529315, lng: -72.10258886218071},
                    {lat: -36.617282217382154, lng: -72.09636613726616},
                    {lat: -36.61916593094686, lng: -72.09525100886822},
                    {lat: -36.61945225137916, lng: -72.09517791867256},
                    {lat: -36.62122827541757, lng: -72.09608383476734},
                    {lat: -36.62373616695088, lng: -72.09792450070381},
                    {lat: -36.62402677571599, lng: -72.09623001515865},
                    {lat: -36.62418822455651, lng: -72.09485605359077},
                    {lat: -36.62434321512527, lng: -72.0940051227808},
                    {lat: -36.62601580185079, lng: -72.09490433335304},
                    {lat: -36.62686822591033, lng: -72.09546558558941},
                    {lat: -36.62887009382969, lng: -72.09017023444176},
                    {lat: -36.62880336573678, lng: -72.08849653601646},
                    {lat: -36.628235098346444, lng: -72.08802983164787},
                    {lat: -36.62882166215509, lng: -72.08678059279919},
                    {lat: -36.62818128492942, lng: -72.08303824067116},
                    {lat: -36.62706303362068, lng: -72.08332724869251},
                    {lat: -36.62539585115878, lng: -72.08318307995796},
                    {lat: -36.625589586285685, lng: -72.08070538938046},
                    {lat: -36.625675690630224, lng: -72.07567825913429},
                    {lat: -36.62777660682968, lng: -72.07627438008785},
                    {lat: -36.63036930816923, lng: -72.0770575851202},
                    {lat: -36.63121630294644, lng: -72.07264803349972},
                    {lat: -36.62566169868079, lng: -72.07092069089413},
                    {lat: -36.625605730857615, lng: -72.0697981864214},
                    {lat: -36.62567246171904, lng: -72.0689157396555},
                    {lat: -36.62592754528586, lng: -72.06788375973701}     
                ];
                
                
                
                var polylineRapidoIda = new google.maps.Polyline({
                    path: coordenadasRapidoIda,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                var polylineRapidoVuelta = new google.maps.Polyline({
                    path: coordenadasRapidoVuelta,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });

                //Mostrar puntos en pantalla

                if (mostrarRapidoIda == true) {
                     polylineRapidoIda.setMap(map);
                }

                if (mostrarRapidoVuelta == true) {
                    polylineRapidoVuelta.setMap(map);
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
    if (document.getElementById('rapidoIda').checked) {
        mostrarRapidoIda = true;
        mostrarRapidoVuelta = false;
        geo();
    } else {
        if (document.getElementById('rapidoVuelta').checked) {
            mostrarRapidoIda = false;
            mostrarRapidoVuelta = true;
            geo();   
        }

   }
}

//Descarga de imagen
function init() {
    console.log('Inicio de descarga');
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

        console.log('file system open: ' + fs.name);

        // Make sure you add the domain name to the Content-Security-Policy <meta> element.
        var url = 'http://i.imgur.com/krdlB2M.jpg';
        // Parameters passed to getFile create a new file or return the file if it already exists.
        fs.root.getFile('downloaded-image.png', {create: true, exclusive: false}, function (fileEntry) {
            download(fileEntry, url, true);

        }, error);

    }, error);
}

function error() {
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
