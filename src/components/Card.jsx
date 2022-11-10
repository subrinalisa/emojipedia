import React from "react";

const Card = (props) => {
  return (
    <div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-body">
          <span>{props.icon}</span>
          <h2>{props.name}</h2>
          <p>{props.des}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
