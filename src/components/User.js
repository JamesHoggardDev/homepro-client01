import React from 'react'

export default function User({user}) {

  // const handleClick = () => {
  //   axios.delete('http://localhost:3001/logout', { withCredentials: true })
  //     .then(res => {
  //       handleLogout()
  //       history.push('/')
  //     })
  //     .catch(error => console.log(error))
  // }

  return (
    <div>
      <h1>User</h1>
      <main>Welcome to Your User Page</main>
      <div>
        <br></br>
        <hr></hr>
        <iframe width="1401" height="704" src="https://www.youtube.com/embed/Qu0HUsfzsmc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
};

