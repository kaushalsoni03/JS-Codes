// Wait for element to render in DOM START
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
waitForElm(selector).then((elm) => {
    // Your code here      
})
// Wait for element to render in DOM END


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Mutation observer to be executed when something changes in DIV Start

// Select the target node that you want to observe
const targetNode = document.getElementById('selector');

// Create a new instance of Mutation Observer
const observer = new MutationObserver((mutationsList, observer) => {
  // Iterate through the mutations
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log('An attribute has been modified.');
    }
  }
});

// Configure the observer to watch for specific types of mutations
const config = {
  attributes: true, // Watch for attribute changes
  childList: true, // Watch for additions or removals of child nodes
  subtree: true // Watch for mutations within the entire subtree of the target node
};

// Start observing the target node with the specified configuration
observer.observe(targetNode, config);

// To stop observing, you can call observer.disconnect()
// Mutation observer to be executed when something changes in DIV End


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Mutation observer to be executed when changes in URL without Load the page Start
let last_Url = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== last_Url) {
       last_Url = url;	
      // YOUR CODE HERE
    }
  }).observe(document, {subtree: true, childList: true})
// Mutation observer to be executed when changes in URL without Load the page End



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// When you want to make div height same as other DIVs Start (jQuery code)
$(document).ready(function(){
    allulheight();  
});

$(window).resize(function(){
    allulheight();
});

$(window).load(function(){
    allulheight();
});

function allulheight(){
    var heightarray = new Array();
    $('Selector').each(function() {
        var height = $(this).outerHeight();
        heightarray.push(height);
    });
    var maxheight = Math.max.apply(Math,heightarray);
    $('Selector').height(maxheight);
}
// When you want to make div height same as other DIVs End



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Share API code start
const shareData = {
    title: "Title you want to add while sharing",
    text: "Some description you want to add",
    url: "Specific URL you want to share while clicking on share button",
  };
  const btn = document.querySelector("Selector");
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
     console.log(err)
    }
  });
// Share API code end 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SetInterval code Start (jQury code)
var quesInterval = setInterval(function(){
    if($('Selector').length == 0 ){ //when div appears
        setTimeout(function(){
           // Your code here
        },1000) // Time limit you want to add 
        clearInterval(quesInterval);
    }
},1000)
// SetInterval code End



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Store cookies start
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}



function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// Calling the funciton
setCookie('ppkcookie','testcookie',7);

var x = getCookie('ppkcookie');
if (x) {
    // Your code with value x
}
// Store cookies end



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Function runs only once at a time when page loads Start

if (!localStorage.getItem('functionExecuted')) {
  // Run your function here

  // This code will be checked by the localstorage, 
  // If the function is stored in localstorage then code will return 'else'.

  // Set the flag to indicate that the function has been executed
  localStorage.setItem('functionExecuted', true);
}else{
  console.log("Funciton executed on other pages");
}
// Function runs only once at a time when page loads end



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



