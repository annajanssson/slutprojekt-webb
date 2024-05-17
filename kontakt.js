mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5hbmFzZW4iLCJhIjoiY2x3NmlrNzI0MDEzZTJwbzlsbjRwY3BpYSJ9.Z4Ky7zTkwWHVhTIOQRw0pA";
const monument = [18.125365, 59.466297]; //koordinater till platsen
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: monument,
  zoom: 17,
});

const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  "Construction on the Washington Monument began in 1848."
);

const el = document.createElement("div");
el.id = "marker";

new mapboxgl.Marker(el).setLngLat(monument).setPopup(popup).addTo(map);
