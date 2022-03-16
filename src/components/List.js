import React from 'react'

function List() {
  return (
    <div>
      <h1>List</h1>

      <div className="exerCard" key={list.id}>

        <img className="exerImage" src={list.image} alt="image" />
        <br />
        <h2 className="exerName">{list.frequency}</h2>
        <br></br>
        <p className="exerDescr"> {list.description}</p>

       </div>
    </div>
   
  );
};
export default List;