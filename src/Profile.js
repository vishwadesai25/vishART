import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div class="card10 hovercard">
        <div class="cardheader">
          <img src="./image/bg13.jpg" />
          {/* <img src="https://images.unsplash.com/photo-1543616991-75a2c125ff5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1b3RlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/> */}
        </div>
        <div class="avatar">
          <img
            alt=""
            src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
          />
        </div>
        <div className="contact-icon1">
          <div className="contact-icon">
            123-456-789
            <br />
            Send a message
          </div>
        </div>
        <div className="bottom10">
          <p>Vishwa Desai</p>
        </div>
        <div class="bottom">
          <h1>you can learn anything that want !!!</h1>
        </div>
        <div>
        
        <button className="btn11 btn btn-sm" href="./contact">
          Chat
        </button>
        {/* <button className="btn11 btn btn-sm" onClick={handleBack}>
            Back
          </button> */}
          </div>
      </div>
    </>
  );
}

export default Profile;
