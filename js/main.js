const getRandomFloat = (startNumber, endNumber, decimal) => {
  if (startNumber < 0 || endNumber <  0) {
    return -1;
  }

  if (startNumber === endNumber) {
    return startNumber;
  }

  return Math.round((Math.abs(endNumber - startNumber) * Math.random() + Math.min(startNumber, endNumber)) * Math.pow(10, decimal)) / Math.pow(10, decimal);
};

getRandomFloat(5, 10, 2);

const getRandomInt = (startNumber, endNumber) => getRandomFloat(startNumber, endNumber, 0);

getRandomInt(5, 10);
