//BIZ LOGIC

//function to generate output from least to greatest
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

//function to increment the ID of the currently displayed image
function picSwap(currentPic) {
  var picsArr = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
  var currentIndex = picsArr.indexOf(currentPic);
  if (currentIndex < picsArr.length-1) {
    return picsArr[currentIndex + 1];
  } else return picsArr[0];
}

//UI LOGIC
$(function(){
  var keyUps = 0;
  //function to print output on keyup in input
  $('#userInput').keyup(function(){
    console.log('triggered');
    //logic to display new photo every five keyups
    keyUps++;
    if(keyUps > 4) {
      var currentPic = $('.show').attr('id');
      $('img').removeClass();
      $('#' + picSwap(currentPic)).addClass('show');
      keyUps = 0;
    }
    //clear any previously printed outputs
    $('#outputList').empty($('#outputList'));
    //call beepBoop to create array, then run forEach to print
    beepBoop($('#userInput').val()).forEach(function(output){
      //look at output preference radio to determine output order before printing
      if($("input:radio:checked").val() < 2) {
        console.log('hi');
        $('#outputList').append('<li>' + output + '</li>');
      } else $('#outputList').prepend('<li>' + output + '</li>');
    });
    //logic to clear output if input is empty
    if($('#userInput').val() === '') {
      $('#outputList').empty($('#outputList'));
    }
  });
  //function to re-order output when new radio button is selected
  $('input:radio').change(function(){
    $('#userInput').trigger('keyup');
  });
});
