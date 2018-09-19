
/*########################################################

##############################################################*/

function $Get(id){
  /*This code would return the ID of the element*/
  return document.getElementById(id);
}

function formatTime(){
  /*This function validates the user input*/
  var time = $Get("time").value;
  var fields = time.split(':');
  var hour = fields[0];
  var min = fields[1];
  
  if(time === ''){
    $Get("result").innerHTML = "Enter a time .... <i>example: 1:30</i>";
  }else{
      if(min <= 60 && hour <= 24){
         calcTime(time);
      }else{
         $Get("result").innerHTML = "Invalid Time";
     }
  }
}

function calcTime(time){
  /*This function would calculate the time*/
  var fields = time.split(':');
  var hour = parseInt(fields[0]);
  var min = parseInt(fields[1]);
  var nextHour = hour+1;
  
  //if hour is 24 and minutes is 60 then go to next day
  if(hour == 24 && min == 60){
    hour = 1; 
    min = 0;
  }  

  var timeString, hourString = timeConvert(hour), minString = timeConvert(min), nextHourString = timeConvert(nextHour);
  
  switch(min){    
    case 0:
         timeString = hourString+" O'Clock";
      break;
    case 60:
         timeString = nextHourString+" O'Clock"; 
      break;
    default:
         var state = "after"+" "+hourString;
         timeString = minString+" minute(s) "+state;
         if(hour == 24){
            state = "to"+" "+timeConvert(1); 
            timeString = timeConvert(60-min)+" minute(s) "+state;
         }else if(min > 30){
            state = "to"+" "+nextHourString; 
            timeString = timeConvert(60-min)+" minute(s) "+state;   
          }
      break;
  }

  $Get("result").innerHTML = timeString;
}


function timeConvert(num){
  /*this function converts numbers to words*/
    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty');
  
    var output = '';
    var numString = num.toString();

    if(num == 0){
      return 'Zero';
    }
  
    if(num > 60){
      return 'Cannot be a time';
    }

    if (num < 20) {
        output = ones[num];
        return output;
    }

    output += tens[parseInt(numString.charAt(0))];
    output += ones[parseInt(numString.charAt(1))];

    return output;
}   
