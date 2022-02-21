function getRandomColor(min, max) {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
  // Math.floor(Math.random() * (max - min)) + min;
}

// element.onclick = function() {
//     element.style.backgroundColor = 'rgb('+getRandomColor(0,255)+', '+getRandomColor(0,255)+', '+getRandomColor(0,255)+')';
//   };
export default getRandomColor;
