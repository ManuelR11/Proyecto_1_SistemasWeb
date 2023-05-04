import React from "react";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
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
                    <MdHomeFilled style={{ fontSize: "27.5px" }}/>
                    <span>Inicio</span>
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
        </div>
    );
}

