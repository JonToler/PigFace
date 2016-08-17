$(document).ready(function(){

  function translator(input){
    var vowels = ["a","e","i","o","u"];
    var specChars = ["!","?",".",","];
    var i = 0;
    var consonants = "";
    var punctuation = "";
    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
    sentence.forEach(function(word) {
      result += translator(word) + " ";
      });
      $("#pigOut").text(result);
      $("#pigFace").submit(function(event){
        var sentence = $("#pigIn").val().toLowerCase().split(" ");

        var result = [];





    if(specChars.includes(input[input.length-1])){
      punctuation = input[input.length-1];
      input = input.slice(0, input.length-1);
    }
    if(!vowels.includes(input[i]) && !numbers.includes(input[i])){
      do{
        consonants += input[i];
        ++i;
      }while(!(vowels.includes(input[i])) && (input[i] != "y"));

      if((input[i-1]==="q") && (input[i]==="u")){
        consonants += input[i];
        ++i;
      }
    }else if(!numbers.includes(input[i])){
      return input + "ay"+punctuation;
    }else{
      return input + punctuation;
    }
    return input.slice(i)+consonants+"ay"+punctuation;
  }




    });


    event.preventDefault();

});
