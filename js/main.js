const getRandomInt = (min, max) => {
  if (min >= max || min < 0) {
    return false;
  }
  max = Math.floor(max);
  max = Math.ceil(max);
  const nubmer = Math.floor(min + Math.random() * (max - min + 1));
  return nubmer;
};

const getRandomFloat = (min, max, decimal) => {
  if (min >= max || min < 0) {
    return false;
  }
  const floatNumber = min + Math.random() * (max - min);
  return Number(floatNumber.toFixed(decimal));
};

getRandomInt(1, 15);

getRandomFloat(1.358, 2.283, 3);
