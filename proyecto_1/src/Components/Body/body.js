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
        </div>
    );
}