const sortByDisabledAndName = (array) => {
  return array.sort((a, b) => {
    if (a.url && b.url) {
      return a.title.localeCompare(b.title);
    } else if (!a.url && b.url) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
};

export { sortByDisabledAndName };
