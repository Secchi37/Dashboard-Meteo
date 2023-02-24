import React from "react";
import Maps from "../components/Map";
import { position } from "../DATA/objectData";
import { markers } from "../DATA/objectData";
import "../App.css";

export default function Dashboard(props){
const olbia= [40.9237, 9.4963];
const villasor=[39.3804, 8.9409];
const oristano=[39.9056, 8.5923];
const sassari=[40.7293, 8.5497];
  


    return(
    <div>
    Dashboard page  
    <div className="mappa"><div className="qMaps"><Maps markers={markers} position={position}/></div>
    <div className="qMaps"><Maps position={olbia}/></div>
    <div className="qMaps"><Maps position={sassari}/></div>
    <div className="qMaps"><Maps position={villasor}/></div>
    <div className="qMaps"><Maps position={oristano}/></div></div> 
    
   

    
    </div>
    )
}