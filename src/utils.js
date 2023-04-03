const getRandomNumber = (maxNumber = 100) => {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum;
};

export default getRandomNumber;
