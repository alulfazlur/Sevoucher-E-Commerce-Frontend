import React, { Component } from "react";
import { Link } from "react-router-dom";

const GameDetail = (props) => {
  return (
    <React.Fragment>
      <h1 className="game-title">{props.name}</h1>
      <h4 className="game-dev">{props.publisher}</h4>
      <img
        className="product-banner"
        src={props.banner}
        alt="product-banner"
      />
      <div className="row my-4 game-links d-flex justify-content-center">
        {props.gplay ? 
          <a href={props.gplay} type="button" target="_blank" className="game-links-btn mr-2 btn btn-dark">
          Download
          <i className="ml-1 fab fa-google-play"></i>
        </a>
        : false}
        {props.appstore ? 
        <a href={props.appstore} type="button" target="_blank" className="game-links-btn mr-2 btn btn-dark">
          Download
          <i className="ml-1 fab fa-app-store-ios"></i>
        </a>
        : false}
        {props.website ? 
        <a href={props.website} type="button" target="_blank" className="game-links-btn mr-2 btn btn-dark">
          Website
          <i className="ml-1 fas fa-link"></i>
        </a>
        : false}
        {props.community ? 
        <a href={props.community} type="button" target="_blank" className="game-links-btn btn btn-dark community">
          Community
          <i className="ml-1 fas fa-comments"></i>
        </a>
        : false}
      </div>
      <div className="game-text">
        <p className="text-justify">
          Bisa bayar melalui Telkomsel, GO-PAY, DANA, SAKUKU, DOKU WALLET, OVO,
          True Money, AkuLaku, Yap!, BNI, BCA, CIMB Clicks, Mandiri, Permata,
          Danamon, Maybank BII, Indomaret, Alfamart, Kartu Kredit. Top Up juga
          bisa dilakukan tanpa kartu kredit, tanpa registrasi, dan tanpa login.
        </p>
        <p className="about-game text-justify">
          Tentang {props.name}: <br />
          {props.description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default GameDetail;
