import React from "react";
import pointer from "../../images/locate-icon.jpeg"

function Card(props) {
  return (
    <div className="card-container">
      
        <img id="card-img" src={props.img}/>

      <div className="card-info">
       

        <div className="map-info"> 
             <img  className="pointer" src={pointer}/>
            <h3>{props.location}</h3>
             <a className="map-url" href={props.mapUrl}>view on Google maps</a>
        </div>
        
       

        <h1 className="place">{props.title}</h1>

        <h3 className="dates">
          {props.startDate}-{props.endDate}
        </h3>

        <p>{props.description}</p>
      </div>
      
    </div>
  );
}

export default Card;
