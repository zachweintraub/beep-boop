function beepBoop(input) {
  var num = parseInt(input);
  var outputArr = [];
  if(isNaN(num) || num < 1) {
    outputArr.push('You call that a number, Dave?')
  } else {
    for(var i = 1; i < num+1; i++) {
      if(i.toString().split('').includes('3')) {
        outputArr.push('I\'m sorry, Dave. I\'m afraid I can\'t do that.');
      } else if (i.toString().split('').includes('2')) {
        outputArr.push('Boop!');
      } else if (i.toString().split('').includes('1')) {
        outputArr.push('Beep!');
      } else outputArr.push(i);
    }
  }
  return outputArr;
}

$(function(){

});
