import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Popup } from "react-leaflet";
import { iconMarker } from "../DATA/objectData";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../App.css";


export default function Maps(props) {
    const position=props.position
    const markers=props.markers;
    useEffect(() => {
        callData();
        if (info === null) {
            callData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [location, setLocation] = useState(null);
    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const callData = async () => {
        try {
            const dati = await Promise.all(
                markers.map(async (item) => {
                    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=31a8826667644854b57114207231602&q=" + item.coord + "&aqi=no&lang=it");
                    const resp = await (await response.json());
                    return resp;
                })
            );
            setLocation(dati.map(dati1));

            const datiMarker = markers.map((title, index_value) => {
                return {
                    meteo: location[index_value],
                    value: markers[index_value],
                };
            });
            setInfo(datiMarker);
            setIsLoading(true);
        } catch (error) {
            setIsLoading(false);
            //console.log('mamcano dati');
        }
    };

    function dati1(item) {
        return {
            humidity: item.current.humidity,
            temp: item.current.temp_c,
            vento: item.current.wind_dir,
            pressione: item.current.pressure_mb,
            stato: item.current.condition.text,
            icon: item.current.condition.icon,
        };
    }
    useEffect(() => {
        if (info === null && location !== null) {
            callData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info, location]);

    return (
        <div className="leaflet-container">
            <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isLoading === true ?
                    <div>
                        {info.map((info, index) => (
                            <Marker
                                key={index}
                                position={info.value.coord}
                                icon={iconMarker}
                                title={info.value.title}
                            >
                                <Popup>
                                    {info.value.title}<br />
                                    {info.meteo.stato}<br />
                                    <img alt="icona meteo" src={info.meteo.icon} /><br />
                                    temperatura {info.meteo.temp}<br />
                                    umidità {info.meteo.humidity}<br />
                                    dir. vento {info.meteo.vento}<br />
                                    pressione {info.meteo.pressione}<br />

                                </Popup>
                            </Marker>
                        ))}
                    </div>
                    : null}
            </MapContainer>
        </div>
    );
}
