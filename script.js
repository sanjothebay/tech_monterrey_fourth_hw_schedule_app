var hourTime = {
  1: "one",
  2: "Two",
  3: "Three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};

//let newVar =$("<div>");
// newVar.text("createdDiv");
//$("aside").append(newVar);

var d = new Date();
$("#currentDay").html(d);
console.log(currentDay)

//.format("dddd, MMMM Do YYYY");

let notes = {};
let textAreaTime;

let currentHour = moment().hour(); // Number
console.log(currentHour)

//textInPutFromUser = localStorage.getItem(id);

$("textarea").each(function() {
    console.log( $( this ));
    textAreaTime = parseInt($(this).attr("id"))
    //console.log(textAreaTime)
    
    if (textAreaTime === currentHour) {
        $(this).addClass("present")
        
      } else if (textAreaTime > currentHour){
        $(this).addClass("future");
    }
    else if (textAreaTime < currentHour){
      $(this).addClass("past");
    }
    //$(this).text(localStorage.getItem(textInPutFromUser, timeSlot));
  });
  
  localStorage.getItem(textAreaTime)
  
  let sideTextSaved = document.querySelector("#exampleFormControlTextarea1")
  
  let textInPutFromUser;
  let timeSlot;

 
  
  $(this).text = localStorage.getItem(timeSlot, textInPutFromUser);
  
  $("#id.testAreaInput").val(localStorage.getItem(timeSlot, textInPutFromUser));
  
  $(".saveBtn").on("click", function(event){
    event.preventDefault()
    
    textInPutFromUser = $(this).siblings("textarea").val();
    
    timeSlot = $(this).parent().attr("id");
    
    $(this).val(localStorage.getItem("id"));
    //sideTextSaved.textContent = timeSlot;
    var testButton =  document.getElementById("9 textAreaInput")
    console.log(testButton)


    sideTextSaved.textContent = ('jsonValue',JSON.stringify(localStorage));
    //sideTextSaved.textContent = textInPutFromUser;
    //localStorage.getItem(timeSlot, textInPutFromUser);
    
    //localStorage.setItem(timeSlot, "textByUser");
    localStorage.setItem(timeSlot, textInPutFromUser);
   //localStorage.setItem("currentHourTime", timeSlot);
   console.log(timeSlot)
   
   
   
   
  });
  
  console.log(localStorage)
  
  $(".time-block").each(function(){
    var text = localStorage.getItem($(this).attr("id"))
    $(this).children("textarea").val(text)
    console.log(text)
    console.log(this)
    var id= $(this).attr("id")
    console.log("id:", id)

  });
  
  
  

 // $(this).text(localStorage.getItem(textInPutFromUser, timeSlot));
//00:46:17/04:37:50  localstorage to add the aside to show message



//   $(".saveBtn").on("click", function(){
// $(this.)attr.$


// var time for localStorage value
// var text vale
//   })

// console.log(new Date());

// parsin
//save button eventlisteer

//localStorage

// showtime depending on day past present and futur

//all have ID

// dispaly what is on localstorage on the current row