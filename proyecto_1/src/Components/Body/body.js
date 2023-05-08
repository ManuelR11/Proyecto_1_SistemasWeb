import React, { useRef } from "react";
import { useEffect} from 'react';
import Card from "../Card/card";
import './body.css';
import Image1 from "./../../Imagenes/primera.PNG";
import Image2 from "./../../Imagenes/segunda.PNG";
import Image3 from "./../../Imagenes/tercera.PNG";
import Image4 from "./../../Imagenes/Cuarta.PNG";
import Image5 from "./../../Imagenes/quinta.PNG";
import Image6 from "./../../Imagenes/octava.PNG";
import Image7 from "./../../Imagenes/novena.PNG";
import Image8 from "./../../Imagenes/decima.PNG";
import Image9 from "./../../Imagenes/onceaba.PNG";
import Image10 from "./../../Imagenes/doceaba.PNG";
import Image11 from "./../../Imagenes/quince.PNG";
import Image12 from "./../../Imagenes/quince_1.PNG";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineCopyrightCircle} from "react-icons/ai";


export default function Body() {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    }, [containerRef.current?.children.length]);

    return (
        <div className="body">
            <div className="firstpath">
                <a className="title_1" href="">Enfoque</a>
                <a className="subtitle_1" href="">Mostrar todo</a>
                <div className="line" ref={containerRef}>
                    <Card 
                        imageSrc={Image1}
                        imageAlt="Image 1"
                        title="Peaceful Piano"
                        subtitle="Relax and indulge with beautiful piano pieces"
                    />
                    <Card 
                        imageSrc={Image2}
                        imageAlt="Image 2"
                        title="Deep Focus"
                        subtitle="Keep calm and focus with ambient and post-rock ."
                    />
                    <Card 
                        imageSrc={Image3}
                        imageAlt="Image 3"
                        title="Instrumental Study"
                        subtitle="Focus with soft study music in the background"
                    />
                    <Card 
                        imageSrc={Image4}
                        imageAlt="Image 4"
                        title="Focus Flow"
                        subtitle="Uptempo instrumental hip hop beats"
                    />
                    <Card 
                        imageSrc={Image5}
                        imageAlt="Image 5"
                        title="Beats to think to"
                        subtitle="Focus with deep techno and tech house"
                    />
                </div>
            </div>
            <div className="secondpath">
                <a className="title_2" href="">Playlists de Spotify</a>
                <a className="subtitle_2" href="">Mostrar todo</a>
                <div className="line_2" ref={containerRef}>
                    <Card 
                        imageSrc={Image6}
                        imageAlt="Image 1"
                        title="Today's Top Hits"
                        subtitle="Ed Sheeran is on top of the Hottest 50!"
                    />
                    <Card 
                        imageSrc={Image7}
                        imageAlt="Image 2"
                        title="RapCaviar"
                        subtitle="New music from Lil Baby, Gucci Mane and Dababy"
                    />
                    <Card 
                        imageSrc={Image8}
                        imageAlt="Image 3"
                        title="All Out 2010s"
                        subtitle="The biggest songs of the 2010s."
                    />
                    <Card 
                        imageSrc={Image9}
                        imageAlt="Image 4"
                        title="Rock Classics"
                        subtitle="Rock legends & epic songs that continue to ."
                    />
                    <Card 
                        imageSrc={Image10}
                        imageAlt="Image 5"
                        title="Chill Hits"
                        subtitle="Kick back to the best new and recent chill hits."
                    />
                </div>
            </div>

            <div className="thirdpath">
                <a className="title_3" href="">Dormir</a>
                <div className="line_3" ref={containerRef}>
                    <Card 
                        imageSrc={Image11}
                        imageAlt="Image 1"
                        title="Sleep"
                        subtitle="Gentle ambient piano to help you fall asleep."
                    />
                    <Card 
                        imageSrc={Image12}
                        imageAlt="Image 2"
                        title="DayDreamer"
                        subtitle="Drift away with enthralling instrumentals"
                    />
                </div>
            </div>

            <div className="footer" ref={containerRef}>
                <h1 className="tit1">Compañia</h1>
                <h1 className="tit2">Comunidades</h1>
                <h1 className="tit3">Enlaces útiles</h1>
                <button className="insta"><AiOutlineInstagram style={{ color: "white", fontSize: "20px", marginTop: "1px" }} /></button>
                <button className="twit"><AiOutlineTwitter style={{ color: "white" , fontSize: "20px", marginTop: "1px"  }} /></button>
                <button className="face"><AiOutlineFacebook style={{ color: "white" , fontSize: "20px", marginTop: "1px"  }} /></button>
            </div>

            <div className="footer_2" ref={containerRef}>
                <span><a className="f1" href="">Acerca de</a></span>
                <span><a className="f2" href="">Para artistas</a></span>
                <span><a className="f3" href="">Ayuda</a></span>
            </div>

            <div className="footer_3" ref={containerRef}>
                <span><a className="f4" href="">Empleo</a></span>
                <span><a className="f5" href="">Desarrolladores</a></span>
                <span><a className="f6" href="">App móvil gratis</a></span>
            </div>

            <div className="footer_4" ref={containerRef}>
                <span><a className="f7" href="">For the Record</a></span>
                <span><a className="f8" href="">Publicidad</a></span>
            </div>

            <div className="footer_5" ref={containerRef}>
                <a href="">Inversionistas</a>
            </div>

            <div className="footer_6" ref={containerRef}>
                <a href="">Proveedores</a>
            </div>

            <div className="footer_7" ref={containerRef}>
                <a href="">Spotify for Work</a>
            </div>

            <div className="linea" ref={containerRef}></div>

            <div className="footer_8" ref={containerRef}>
            <h2><AiOutlineCopyrightCircle/>2023 Spotify AB</h2>
            </div>
        </div>
    );
}
































/*
import React from "react";
import Card from "../Card/card";
import './body.css';
import Image1 from "./../../Imagenes/primera.PNG";
import Image2 from "./../../Imagenes/segunda.PNG";
import Image3 from "./../../Imagenes/tercera.PNG";
import Image4 from "./../../Imagenes/Cuarta.PNG";
import Image5 from "./../../Imagenes/quinta.PNG";
import Image6 from "./../../Imagenes/octava.PNG";
import Image7 from "./../../Imagenes/novena.PNG";
import Image8 from "./../../Imagenes/decima.PNG";
import Image9 from "./../../Imagenes/onceaba.PNG";
import Image10 from "./../../Imagenes/doceaba.PNG";

export default function Body() {
    return (
        <div className ="body">
            <div className="firstpath">
                <a className="title_1" href="">Enfoque</a>
                <a className="subtitle_1" href="">Mostrar todo</a>
                <div className="line">
                    <Card 
                        imageSrc={Image1}
                        imageAlt="Image 1"
                        title="Peaceful Piano"
                        subtitle="Relax and indulge with beautiful piano pieces"
                    />
                    <Card 
                        imageSrc={Image2}
                        imageAlt="Image 2"
                        title="Deep Focus"
                        subtitle="Keep calm and focus with ambient and post-rock ."
                    />
                    <Card 
                        imageSrc={Image3}
                        imageAlt="Image 3"
                        title="Instrumental Study"
                        subtitle="Focus with soft study music in the background"
                    />
                    <Card 
                        imageSrc={Image4}
                        imageAlt="Image 4"
                        title="Focus Flow"
                        subtitle="Uptempo instrumental hip hop beats"
                    />
                    <Card 
                        imageSrc={Image5}
                        imageAlt="Image 5"
                        title="Beats to think to"
                        subtitle="Focus with deep techno and tech house"
                    />
                </div>
            </div>
            <div className="secondpath">
                <a className="title_2" href="">Playlists de Spotify</a>
                <a className="subtitle_2" href="">Mostrar todo</a>
                <div className="line_2">
                    <Card 
                        imageSrc={Image6}
                        imageAlt="Image 1"
                        title="Today's Top Hits"
                        subtitle="Ed Sheeran is on top of the Hottest 50!"
                    />
                    <Card 
                        imageSrc={Image7}
                        imageAlt="Image 2"
                        title="RapCaviar"
                        subtitle="New music from Lil Baby, Gucci Mane and Dababy"
                    />
                    <Card 
                        imageSrc={Image8}
                        imageAlt="Image 3"
                        title="All Out 2010s"
                        subtitle="The biggest songs of the 2010s."
                    />
                    <Card 
                        imageSrc={Image9}
                        imageAlt="Image 4"
                        title="Rock Classics"
                        subtitle="Rock legends & epic songs that continue to ."
                    />
                    <Card 
                        imageSrc={Image10}
                        imageAlt="Image 5"
                        title="Chill Hits"
                        subtitle="Kick back to the best new and recent chill hits."
                    />
                </div>
            </div>

            <div className="thirdpath">
                <a className="title_3" href="">Dormir</a>
                <div className="line_3 scrollable">
                    <Card 
                        imageSrc={Image11}
                        imageAlt="Image 1"
                        title="Sleep"
                        subtitle="Gentle ambient piano to help you fall asleep."
                    />
                    <Card 
                        imageSrc={Image12}
                        imageAlt="Image 2"
                        title="DayDreamer"
                        subtitle="Drift away with enthralling instrumentals"
                    />
                </div>
            </div>


            <div className="footer">
                <h1 className="tit1">Compañia</h1>
                <h1 className="tit2">Comunidades</h1>
                <h1 className="tit3">Enlaces útiles</h1>
            </div>
        </div>

        </div>
    );
}

*/