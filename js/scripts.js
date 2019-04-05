function beepBoop(input) {
  var num = parseInt(input);
  var outputArr = [];
  if(isNaN(num) || num < 0 || num > 1000) {
    if(num > 1000) {
      outputArr.push('I\'d rather not count that high, Dave.')
    } else outputArr.push('You call that a number, Dave?')
  } else {
    for(var i = 0; i < num+1; i++) {
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

function picSwap(currentPic) {
  var picsArr = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
  var currentIndex = picsArr.indexOf(currentPic);
  if (currentIndex < picsArr.length-1) {
    return picsArr[currentIndex + 1];
  } else return picsArr[0];
}

$(function(){
  $('#userInput').keyup(function(){
    var currentPic = $('.show').attr('id');
    $('img').removeClass();
    $('#' + picSwap(currentPic)).addClass('show');
    $('#outputList').empty($('#outputList'));
    beepBoop($('#userInput').val()).forEach(function(output){
      $('#outputList').append('<li>' + output + '</li>');
    });
    if($('#userInput').val() === '') {
      $('#outputList').empty($('#outputList'));
    }
  });

});
