import React from "react";
import { Link } from "react-router-dom";

const GameList = (props) => {
  const changeRouter = (namaGame) => {
    localStorage.setItem("namaGame", namaGame);
    namaGame = namaGame.replace(/ /gi, "-");
    props.history.replace("/game/" + namaGame);
    console.warn("cek route", props);
  };

  return (
    <React.Fragment>
      <div className="col-lg-3 col mb-4">
        <div className="card card-game-category">
          <Link onClick={() => changeRouter(props.name)}>
            <img
              src={props.tile}
              className="card-img-top tile-game"
              alt={props.name}
            />
          </Link>
          <div className="card-body">
              <p className="card-title">{props.name}</p>
              <p className="card-text text-muted">{props.publisher}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GameList;
