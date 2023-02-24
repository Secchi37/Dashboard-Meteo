import React from "react";
import { Image } from "react-bootstrap";

export default function HomePage(){
    return(
        <div>
        Home Page
        <Image src={require("../img/shape/logo_widata.png")}></Image>
        <Image src={require("../img/shape/logo_widata_sx.png")}></Image>
        </div>
    )
}