/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blue-code-background.jpg') {
      myImage.setAttribute ('src','images/blue-code-background-brighter.jpg');
    } else {
      myImage.setAttribute ('src','images/blue-code-background.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName===null) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent  = 'The Matrix is cool, ' + myName;
    }   
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Matrix is cool, ' + storedName;
  }

  myButton.onclick = function() {
      setUserName();
  }

