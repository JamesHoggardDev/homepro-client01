import React from 'react'

function ExerCard({ exercise}) {
  
  const { description, frequency, image, id } = exercise;
  return (      
          <div className="exerCard" key={id}>
            <h1 className="exerDescr"> {description}</h1>
            <img className="exerImage" src={image} alt="image" />
            <br />
            <h2 className="exerName">{frequency}</h2>
            <hr />
          </div>
          
  );
}

export default ExerCard

