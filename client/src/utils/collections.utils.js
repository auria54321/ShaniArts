export const collectionsOverview = (collections) => {
  const collectionsArray = [];
  for (let key in collections) {
    let newCollection = { ...collections[key][0], title: key };
    collectionsArray.push(newCollection);
  }

  console.log("CollectionsArray: ", collectionsArray);
  return collectionsArray;
};
