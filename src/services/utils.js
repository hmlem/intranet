const sortByDisabledAndName = (array) => {
  return array.sort((a, b) => {
    if (!a.url) {
      return 1;
    } else if (!b.url) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
};

export { sortByDisabledAndName };
