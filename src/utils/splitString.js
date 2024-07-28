const splitString = (category) => {
  if (typeof category === "string") {
    if (category.indexOf("_") > 0) {
      const words = category.split("_");
      return words.join(' ')
    }
    return category
  }
};


export default splitString
