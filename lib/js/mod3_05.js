window.onload = init();

function init() {
    var ul = document.querySelector(".doc");
    ul.style.listStyle = "none";

    var geoButton = document.querySelector("#geolocate");
    geoButton.addEventListener("click", getLocation);

}

function getLocation(e) {
    e.preventDefault();
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
    } else {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    }
}

function showPosition(position) {
    var map, marker,
        latitude = position.coords.latitude,
        longitude = position.coords.longitude;

    // Instance map using leaflet
    map = L.map('map').setView([latitude, longitude], 13);

    // Tile layer using key api at cloudmade.com
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        key: '760506895e284217a7442ce2efe97797',
        styleId: 103288,
        maxZoom: 16
    }).addTo(map);

    // Marker using leaflet
    marker = L.marker([latitude, longitude]).addTo(map);

    // Popup in leaflet
    marker.bindPopup('<p>Your location</p>').openPopup();
}

// Get current position fail
function error() {
    alert('Get current position fail. Please access codepen to get geolocation.');
}
