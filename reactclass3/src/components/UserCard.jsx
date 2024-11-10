import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img
        id="user-image"
        src="https://tse4.mm.bing.net/th?id=OIP.nRdXqY-ufpYjX6gR0N7llQHaEK&pid=Api&P=0&h=180"
        alt="vivek"
      ></img> 
      <p id="user-description">{props.desc}</p>
    </div>
  );
};

export default UserCard;
    