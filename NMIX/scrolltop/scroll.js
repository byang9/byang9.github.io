// JavaScript Document
 $(document).ready(function(){

$(document).scroll(function() {    //this function is active whenever scrolling is taking place

var top = $(document).scrollTop();  // creates a numeric variable based on whatever the scroll position is at any given moment. 
$('#tellme').html(top);


$('#uga').css({'top': top });  //makes it so that the uga div tag is always in the same vertical location (top) as the scroll position based on the top variable. 
 
 if (top < 300) $('#arch').hide();
 if (top > 300) $('#arch').show(); 
 if (top > 650) $('#arch').hide();
    
 if (top < 720) $('#library').hide();
 if (top > 720) $('#library').show(); 
 if (top > 1900) $('#library').hide();
  
 if (top < 2000) $('#grady').hide();
 if (top > 2000) $('#grady').show(); 
 if (top > 7000) $('#grady').hide();
  
 if (top < 7400) $('#stadium').hide();
 if (top > 7400) $('#stadium').show(); 
 if (top > 11000) $('#stadium').hide();
  
 if (top < 11400) $('#geography').hide();
 if (top > 11400) $('#geography').show(); 
 if (top > 13700) $('#geography').hide();
   });
            });