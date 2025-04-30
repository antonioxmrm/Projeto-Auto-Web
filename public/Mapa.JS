let map;

function initMap() {
    const MotorsLocation = { lat: -22.9285, lng: -47.1652 }; // Substitua pelas coordenadas corretas
    map = new google.maps.Map(document.getElementById('map'), {
        center: MotorsLocation,
        zoom: 15 // Nível de zoom do mapa
    });

    const marker = new google.maps.Marker({
        position: MotorsLocation,
        map: map,
        title: 'Nossa Localização' // Título do marcador
    });
}