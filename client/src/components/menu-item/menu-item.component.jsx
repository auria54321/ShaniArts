import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  console.log("TITLE: ", title);
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      <img className="background-image" alt={title} src={`${imageUrl}`} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default MenuItem;
