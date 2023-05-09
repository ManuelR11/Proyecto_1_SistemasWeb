import React from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";
import './header.scss'

export default function Header() {
    return (
        <div className ="Header">
            <div className="buttons">
                <span><button className="back-button"><AiOutlineLeft style={{ color: "#949494" , fontSize: "22px", marginTop: "1px" }} /></button></span>
                <span><button className="go-button"><AiOutlineRight style={{ color: "#949494" , fontSize: "22px", marginTop: "1px"  }} /></button></span>
                <span><a className="reg" href="" >Registrate</a></span>
                <span><button className="Inicio">Iniciar sesion</button></span>
            </div>
        </div>
    );
}
