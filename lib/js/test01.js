var parameters = {
    target: '#myFunction',
    data: [
        {
            fn: 'sin(x)',
            color: 'purple'
        },
        {
            fn: 'cos(x)',
            color: 'red'
        }
    ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2 * Math.PI]}
};

functionPlot(parameters);


function changeTitle() {
    var title = document.querySelector('#mainTitle');
    title.innerHTML = 'Title changed by JavaScript';
};

function customize() {
    var title = document.querySelector('#mainTitle');
    title.style.color = 'red';
    title.style.fontFamily = 'Arial';
    title.style.fontSize = '2em';
    title.style.fontWeight = 'bold';
    title.style.border = '1px dotted yellow';
}

function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href = "";
    mapLink.textContent = "";

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
