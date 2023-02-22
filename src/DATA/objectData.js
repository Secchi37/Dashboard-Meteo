import L from "leaflet";
export const position = [39.216667, 9.116667];
export const markers = [
    { title: ["Stazione FS"], coord: [39.2161, 9.10826] },
    { title: ["Piazza D'Armi"], coord: [39.22825, 9.11123] },
    { title: ["Domus Arena"], coord: [39.20042, 9.13739] },
    { title: ["Ospedale Marino"], coord: [39.21385, 9.17418] },
    { title: ["Parco Monte Claro"], coord: [39.23447, 9.1157] },
    { title: ["Teatro Lirico di Cagliari"], coord: [39.22629, 9.12368] },
    { title: ["Bastione Saint Remy"], coord: [39.21618, 9.11663] },
    { title: ["Parco Monte Urpinu"], coord: [39.21661, 9.13485] },
    { title: ["Ospedale Binaghi"], coord: [39.2101, 9.13561] },
    { title: ["Open Campus"], coord: [39.22842, 9.06926] },
];
export const iconMarker = new L.Icon({
    iconUrl: require("../img/marker.png"),
    iconSize: "30",
})