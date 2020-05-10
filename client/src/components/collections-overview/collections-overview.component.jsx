import React, { useState, useEffect } from "react";

import { collectionsOverview } from "../../utils/collections.utils";
import MenuItem from "../menu-item/menu-item.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = (props) => {
  const { collections } = props;
  const [collectionsArray, setCollectionsArray] = useState(null);

  useEffect(() => {
    setCollectionsArray(collectionsOverview(collections));
  }, [collections]);

  return collectionsArray ? (
    <div className="collections-overview">
      {collectionsArray.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  ) : (
    <div>No Data</div>
  );
};

export default CollectionsOverview;
