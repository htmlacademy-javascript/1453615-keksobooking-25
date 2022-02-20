function getRandomInt (startNumber, endNumber) {
  return getRandomFloat(startNumber, endNumber, 0);
}

getRandomInt(5, 10);

function getRandomFloat (startNumber, endNumber, decimal) {
  if (startNumber < 0 || endNumber <  0) {
    return null;
  }

  if (startNumber === endNumber) {
    return startNumber;
  }

  return Math.round((Math.abs(endNumber - startNumber) * Math.random() + Math.min(startNumber, endNumber)) * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

getRandomFloat(5, 10, 2);


