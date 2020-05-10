import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ title, imageUrl, price }) => (
  <div className="collection-item">
    <img alt={title} src={imageUrl} />
    <div className="details">
      <span>{title.toUpperCase()}</span>
      <span> {price} $</span>
    </div>
  </div>
);

export default CollectionItem;
