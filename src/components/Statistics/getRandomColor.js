function getRandomColor(min, max) {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

export default getRandomColor;
