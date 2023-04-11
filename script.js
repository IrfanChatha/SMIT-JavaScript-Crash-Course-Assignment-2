//1. Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed
//to it.

function createAdd(num5) {
    return function(num=5) {
      return num5 + num;
    }
  }
  const add5 = createAdd(5);
  const result = add5(5);
  console.log(result);
    

//2. Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.

let arr = [1,2,3,4,5,6,7,8];
let searchVal1 = 1;

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    else if (arr[0] === searchVal1) {
      return true;
    } else { 
      return false; 
    }
  }
  const resultArr = searchArray(arr, searchVal1);
  console.log(resultArr);
  

//3. Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.

function addPara(text) {
  const para = document.querySelector("body");
  para.innerHTML = "<p>"+text+"</p>";
  para.style.position = "absolute";
  para.style.bottom = 0;
}
addPara("This is a new paragraph at bottom of HTML page.");


//4. Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item.

function addListItem(text) {
  const newListItem = document.createElement("li");
  newListItem.textContent = text;
  const unorderedList = document.querySelector("ul");
  unorderedList.appendChild(newListItem);
}
addListItem('New item');


//5. Write a function that changes the background color of an HTML element.
//The function should take two arguments: the first argument is a reference
//to the HTML element, and the second argument is a string representing
//the new background color.

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
  }

const text = document.getElementById("My Text");
changeBackgroundColor(text, "#fff");


//6. Write a function that saves an object to localStorage. The function should
//take two arguments: the first argument is a string representing the key to
//use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
const myObject = { name: "Irfan", age: 40 };
saveToLocalStorage("newObject", myObject);

const myObjectFromLocalStorage = JSON.parse(localStorage.getItem("newObject"));


//7. Write a function that retrieves an object from localStorage. The function
//should take one argument, which is a string representing the key used to
//store the object. The function should return the object.



//8. Write a function that takes an object and saves each property to
//localStorage using the property name as the key and the property value as
//the value. The function should also retrieve the object from localStorage
//and return it as a new object.

