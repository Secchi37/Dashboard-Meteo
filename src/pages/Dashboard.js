import React from "react";
import Maps from "../components/Map";
import { position } from "../DATA/objectData";
import { markers } from "../DATA/objectData";
import "../App.css";


export default function Dashboard(props){

    return (
      <div>               
        <div style={{paddingBottom:'8%'}}>
          <div className="qMaps">
            <Maps markers={markers} position={position} />
          </div>          
        </div>
      </div>
    );
}
