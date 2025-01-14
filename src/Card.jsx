import React from "react";


function Card(props) {
    return (
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card-img" />
          <div className="card-info">
            <span className="card-category"> {props.title} </span>
            <h3 className="card-title"> {props.sName} </h3>
            <a href={props.link} target="-blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    );
  }


  export default Card;