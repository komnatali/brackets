module.exports = function check(str, bracketsConfig) {
  var brackets = str.split('');
  var bracketsConfigOneArray = [];
  bracketsConfig.forEach(function(item, i, bracketsConfig){
    bracketsConfigOneArray = bracketsConfigOneArray.concat(item);
  }); 

 var bracketsArray = [];
 for (var i=0; i < brackets.length; i++){

      let bracket = brackets[i];
      let prevBracket = bracketsArray[bracketsArray.length-1];
      if (bracketsArray.length == 0){
        if (bracketsConfigOneArray.indexOf(brackets[i])  % 2 == 0 && i != brackets.length - 1) bracketsArray.push(bracket);
        else return false;
      }
      else{
          if (bracketsConfigOneArray.indexOf(bracket) % 2 == 1){
            if (bracketsConfigOneArray.indexOf(bracket) == bracketsConfigOneArray.indexOf(prevBracket) + 1){
              bracketsArray.pop();
            } else
            return false;
          }
          else{
            if (bracketsConfigOneArray[bracketsConfigOneArray.indexOf(bracket)] == bracketsConfigOneArray[ bracketsConfigOneArray.indexOf(bracket) + 1] &&
            prevBracket == bracket) bracketsArray.pop();
            else bracketsArray.push(bracket);
          };
        }
      
  };
  
  if (bracketsArray.length != 0) return false;
  return true;
}
