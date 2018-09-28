module.exports = function getZerosCount(number) {
  let result = 0;

  for(let i = 1, len = number; i < len; i++){
    result += Math.floor(number / Math.pow(5,i));

    if(Math.floor(number / (Math.pow(5,i))) == 0) break;
  }

  return result;
}
