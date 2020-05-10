import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./homepage.styles.css";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../components/collection/collection.component";

import COLLECTIONS from "../../mock/collections-mock.js";

const HomePage = ({ match }) => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    setCollections(COLLECTIONS);
  }, []);

  return collections ? (
    <div className="homepage">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => <CollectionsOverview collections={collections} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={() => <CollectionPage collections={collections} />}
        />
      </Switch>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default HomePage;
