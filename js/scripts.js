function beepBoop(num) {
  if(isNan(num) || num < 1) {
    console.log('nooo!')
  } else {
    for(var i = 1; i < num+1; i++) {
      if(i.toString().split('').includes('3')) {
        console.log('I\'m sorry, Dave. I\'m afraid I can\'t do that.');
      } else if (i.toString().split('').includes('2')) {
        console.log('Boop!');
      } else if (i.toString().split('').includes('1')) {
        console.log('Beep!');
      } else console.log(i);
    }
  }
}

$(function(){

});
