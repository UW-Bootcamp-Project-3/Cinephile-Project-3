// //Create the element using the createElement method.
// var myDiv = document.createElement("div");

// //Set its unique ID.
// myDiv.id = 'loadingDiv';

// //Add your content to the DIV
// myDiv.innerHTML = "<div class=\"loader\">Loading...</div>";

// //Finally, append the element to the HTML body
// document.body.appendChild(myDiv);

// function removeLoader(){
//   const loadingDiv = document.getElementById("loadingDiv");
//   loadingDiv.remove();
// };


// setTimeout(removeLoader, 6000); //wait for page load PLUS x seconds.

setTimeout(function(){
  const loadingDiv = document.getElementById("loadingDiv");
  loadingDiv.remove();
}, 5000);