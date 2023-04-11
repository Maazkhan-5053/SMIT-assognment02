     /*QUESTION-1*/

function Adder(num) {
    return function(x) {
      return x + num;
    }
  }
  

  const add = Adder(5);
  console.log(add(45)); 

  

        /*QUESTION-2*/

  function arraySearch(array, value) {
    
    if (array.length === 0) {
      return false;
    }
    
    
    if (array[0] === value) {
      return true;
    } else {
      return arraySearch(array.slice(1), value);
    }
  }
  
  
  const Arr = [10,9,2,5,2,13,34];
  console.log(arraySearch(Arr, 13)); 

  

      /*QUESTION-3*/

 function addpara(Text){
    const newPara = document.createElement("p");
    const textNode = document.createTextNode(Text);
    newPara.appendChild(textNode);
    document.body.appendChild(newPara);
   
 }
 addpara("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae quod asperiores, molestias incidunt, totam ullam assumenda quidem eveniet natus voluptates et ipsam nisi libero, laborum ad ut iure repellat.");

  

      /*QUESTION-4*/

 function addListItem(text) {
    let newListItem = document.createElement("li");
    let textNode = document.createTextNode(text);
    newListItem.appendChild(textNode);
    let list = document.querySelector("ul");
    list.appendChild(newListItem);
  }
  
  
  addListItem("React.Js");

  

  
       /*QUESTION-5*/

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  
  const myElement = document.querySelector("#text");
  changeBackgroundColor(myElement, "orange");

    

        /*QUESTION-6*/


  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
 
  let  data = {
     name: "Maaz khan",
     age: 22,
     city: "Karachi",
     profession: "student "

    };
                       
  saveToLocalStorage("studentData", data);




           /*QUESTION-7*/

  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
  
  let  Info = {
     name: "Maaz khan",
     age: 22,
     city: "Karachi",
     profession: "student "
    };
                       
  saveToLocalStorage("studentData", Info);

  

  function getFromLocalStorage(key) {
    let  objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }
  
  
  let myObject = getFromLocalStorage("studentData");
  console.log(Info);

    

           /*QUESTION-8*/

  function saveObjectToLocalStorage(object) {
    
    Object.keys(object).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(object[key]));
    });
  
    
    const newObject = {};
    Object.keys(object).forEach((key) => {
      const valueString = localStorage.getItem(key);
      newObject[key] = JSON.parse(valueString);
    });
    return newObject;
  }
  
  
  const myObj = {
     name: "Babar Azam",
     age: 28,
     Country: "Pakistan",
     profession:"Crickter"
     };
  const newObject = saveObjectToLocalStorage(myObj);
  console.log(newObject);
   