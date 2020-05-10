import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    setCollection(collections[collectionId]);
  }, [collections, collectionId]);

  return collection ? (
    <div className="collection">
      <h1 className="title">{collectionId.toUpperCase()}</h1>
      <div className="collection-preview">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  ) : (
    <div>No Data</div>
  );
};

export default CollectionPage;
