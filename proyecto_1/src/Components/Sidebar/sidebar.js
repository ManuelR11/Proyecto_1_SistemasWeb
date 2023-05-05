import React from "react";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import {AiOutlineGlobal} from "react-icons/ai";
import './sidebar.css'


export default function Sidebar() {
    return (
        <div id ="sidebar">
            <div className="top__links">
                <div className="logo">
                <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="spotify"
                />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled style={{ fontSize: "27.5px", color: "white" }}/>
                        <span style={{color: "white" }}>Inicio</span>
                    </li>
                    <li>
                        <MdSearch style={{ fontSize: "27.5px" }}/>
                        <span>Buscar</span>
                    </li>
                    <li>
                        <IoLibrary style={{ fontSize: "27.5px" }}/>
                        <span>Tu Biblioteca</span>
                    </li>
                </ul>
            </div>
            <div className="playlist__links">
                <span><a href="">Legal</a></span>
                <span><a href="" >Centro de privacidad</a></span>
                <span><a href="" >Politica de Privacidad</a></span>
            </div>
            <br></br>
            <div className="playlist__links_1">
                <span><a href="">Cookies</a></span>
                <span><a href="" >Sobre los anuncios</a></span>
            </div>
            <div className="playlist__links_2">
                <span><a href="">Cookies</a></span>
            </div>

            <div className="Idioma">
                <button className="rounded-button"><AiOutlineGlobal style={{ alignContent: "left", marginRight: "5px"}}/>Español de Latinoamerica</button>
            </div>

        </div>
    );
}

