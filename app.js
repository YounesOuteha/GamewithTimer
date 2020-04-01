
/* PART 1: COUNTDOWN TIMER */
const startingMinutes = 3;
let time = startingMinutes * 60;
let countDownVar = document.getElementById("timer");
$(document).ready(function () {
function startCountDown() {
            const minutes = Math.floor(time / 60); 
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds; 

            countDownVar.innerHTML = `${minutes}:${seconds}`;
            time--;

            if (time == 0) {
            alert("game over");
            time = startingMinutes * 60;

            }
}
setInterval(startCountDown, 1000);

});



/* ********************************************************************* */

/* PART 2: GUESS MATH ADDITION */

$(document).ready(function () {
    let primaryNumber = Math.floor((Math.random() * 99)+1);
    let secondaryNumber = Math.floor((Math.random() * 99)+1);
    let thirdNumber = primaryNumber + secondaryNumber;
    $('#primary-number').append(`<p>${primaryNumber}</p>`);
    $('#secondary-number').append(`<p>${secondaryNumber}</p>`);
    $('#btn').click(()=>{
        if( thirdNumber == $('#guess').val()){
            alert('Your calculation is correct');
        }else {
            alert('Your calculation is wrong');}
    })
        
})


/* ********************************************************************* */

/* PART 3: COLOR CHANGE */

/* let colorArray = ['red', 'blue', 'green', 'purple', 'black', 'yellow', 'gray', 'orange'];

$(document).ready(function(){
    
    $('#buttonColor').click(()=>{
        var rand = colorArray[Math.floor(Math.random() * colorArray.length)];
      $('#canvas').css('background',`${rand}`);  
    })
})*/


$(function() {
            let colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];

            $('#buttonColor').click(()=>{
                let bodybgarrayno = Math.floor(Math.random() * colors.length);
                $("#canvas").css("background",colors[bodybgarrayno]);
            })
        }) 


/* ********************************************************************* */

/* PART 4: GUESS WORD */

/* let wordArray = ['ironmann', 'beer', 'Auto'];
let slicedArray = [];
let JoinArray = [];
let right1 = $('#right').val();
​
$(document).ready(function() {
     slicedArray = wordArray[Math.floor(Math.random()* 3)].split("");
     console.log(slicedArray);
    $('#right').keyup(function(){
        for (i=0; i<slicedArray.length;i++){
            if (dInput == slicedArray[i]){
                alert('Correct guess, give another Character');
                right1.innerHTML = word.join('');
                dInput = '';
                console.log(dInput);
                
            }
            else{
                alert ('wrong guess');
                dInput='';
                console.log(dInput);
            }
        }
    })
});
 

 */











































/* let wordArray = ['ironmann', 'beer', 'Auto'];
let slicedArray = [];
let JoinArray = [];
let right1 = $('#right').val(); 
$(document).ready(function() {
     slicedArray = wordArray[Math.floor(Math.random()* 3)].split("");
     console.log(slicedArray);
    $('#right').keyup(function(){
        
        for (i=0; i<slicedArray.length;i++){
            if (right1 == slicedArray[i]){
                alert('Correct guess, give another Character');
                right1.innerHTML = word.join('');
                right1 = '';
                console.log(right1);
            }
            else{
                alert ('wrong guess');
                right1='';
                console.log(right1);
            }
        } 
        
            
        /* for (i=0; i<wordArray.length; i++){
            slicedArray = wordArray[i].split("");
            console.log(slicedArray);
            
            for (j=0;j<slicedArray.length;j++){
                console.log($('#right').val());
                
                if (dInput == slicedArray[j]){
                    alert('Correct')
                    alert('guess another charachter');
                    debugger
                    
                }else {
                    alert('Wrong guess');
                    let counter = 12;
                    counter--;
                    $('#remain').append(vv);
                    
                    console.log(counter);
                    
                }
                
            }
        }  



    })
});  */






/* function showfunction(){
    debugger
   for (i=0; i<wordArray.length; i++){
       slicedArray = wordArray[i].split("");
       console.log(slicedArray);
       debugger
       for (j=0;j<slicedArray.length;j++){
           console.log($('#right').val());
           debugger
           if ($('#right').val() == slicedArray[j]){
               alert('Correct')
               alert('guess another charachter');
               debugger
           }else{
               let counter = 11;
               $('#remain').append(`${vv}`);
               counter--;
               debugger
           }
       }
   }  
   console.log(vv);
    
} */

