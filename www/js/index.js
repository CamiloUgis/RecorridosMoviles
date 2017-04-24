// Initialize your app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener("deviceready", function(){
    $('#geo').bind('click', geo);
});

document.addEventListener


function geo(){
    myApp.showPreloader('Localizando... Espere unos segundos...');
    navigator.geolocation.getCurrentPosition(
        function(position){
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
            <!--
            myApp.hidePreloader();
            myApp.popup('.popup-geo');
            -->
        },
        function(error){
            myApp.alert('Se ha producido un error, active GPS','APP_Recorrido');
            myApp.hidePreloader();
        },
        {
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        }
    );
}
