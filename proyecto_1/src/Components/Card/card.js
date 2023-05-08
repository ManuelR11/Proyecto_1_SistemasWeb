
import React from "react";
import { RiPlayFill } from "react-icons/ri";
import "./card.scss";

const Card = ({ imageSrc, imageAlt, title, subtitle }) => {
  return (
    <a href="/" className="card-link">
      <div className="card-image-wrapper">
        <img
          src={imageSrc || "https://www.lahiguera.net/musicalia/artistas/shakira/disco/5863/shakira_shakira-portada.jpg"}
          width={168}
          height={168}
          alt={imageAlt || "Album"}
          className="card-image"
        />
        <button className="card-play-button">
          <RiPlayFill className="icon"/>
        </button>
      </div>
      <div>
        <h5 className="card-title">{title || "Todays Top Hits"}</h5>
        <p className="card-subtitle">{subtitle || "SZA is on top of the Hottest 50!"}</p>
      </div>
    </a>
  );
};

export default Card;
