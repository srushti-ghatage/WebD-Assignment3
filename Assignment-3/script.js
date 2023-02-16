//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


function addNewStudent() {

  try{

  // we use document.querySelector() to retrieve the first,
  // if any, elements matching the supplied CSS selector;
  // this is the element to which new content will be added
    let table = document.querySelector("#myTable tbody");

    newRow = cloneRow.cloneNode(true);
    newDetails = cloneDet.cloneNode(true);
   // count is set to number of checkboxes
    const cnt = document.querySelectorAll("input[type=checkbox]").length + 1;
  
    const rows = newRow.querySelectorAll("td");
  
    rows[1].innerHTML = `Student ${cnt}`;
    rows[2].innerHTML = `Teacher ${cnt}`;
  
    rows[6].innerHTML = Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4));
  
    //capture checkbox checked event
    let checkbox = newRow.querySelector("input[type=checkbox]");
   checkbox.addEventListener('change', () => {
    toggleCheckBox(checkbox);
  })
  
  let imageDown = checkbox.nextElementSibling.nextElementSibling.nextElementSibling;
  //set onclicklistener for image
  imageDown.addEventListener('click', () => {
    toggleHidden(imageDown);
  })
  
  toggleCheckBox(checkbox);
  table.appendChild(newRow);
  table.appendChild(newDetails);
  
    alert("Added New Student");
    toggleVisibility();
  }catch(e){
    alert(`Add failed : ${e}`);
  }
 
}

let inputcheckBox = document.querySelectorAll("input[type=checkbox]");

function toggleCheckBox(checkbox) {
  let row = checkbox.parentElement.parentElement;
  let columnDelete = row.querySelector(":nth-child(9)");
  //removing all child nodes for delete column
  while (columnDelete.firstChild) {
    columnDelete.removeChild(columnDelete.firstChild);
  }
//removing all child nodes for edit column
  let columnEdit = row.querySelector(":nth-child(10)");
  while (columnEdit.firstChild) {
    columnEdit.removeChild(columnEdit.firstChild);
  }
  //clear row background color
  row.bgColor = '';

  //check if checkbox is checked
  if (checkbox.checked) {
    //set row background color to yellow
    row.bgColor = 'yellow';
    //create a new delete button
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Delete';
    //set onclicklistener for button
    button.addEventListener('click', () => {
    row.nextElementSibling.remove();
    row.remove();
    toggleVisibility();
  })

  //add button to delete column
    columnDelete.appendChild(button);
    let editbutton = document.createElement('input');
    editbutton.type = 'button';
    editbutton.value = "Edit";
        //set onclicklistener for button
    editbutton.addEventListener('click', () => {
       prompt("Edit Value")
    })
    columnEdit.appendChild(editbutton);
  }

  toggleVisibility();
}

function toggleVisibility() {
  //get all checkboxes in checkbox array
  let checkBoxArray = document.querySelectorAll("input[type=checkbox]");
  let isChecked = false;
    //check if checkbox is checked
  checkBoxArray.forEach(checkbox => {
    if (checkbox.checked===true) {
      isChecked = true;
      }
    })

    let submitButton = document.getElementById("submitButton");
    //enable/disable subit button
    submitButton.disabled= !isChecked;

    const columnEditNDelete = document.querySelectorAll("#myTable td:nth-child(9),#myTable th:nth-child(9),#myTable td:nth-child(10),#myTable th:nth-child(10)");
     //see if edit/delete button is in classlist. if exists, remove, else add
    columnEditNDelete.forEach(c => {
      c.classList.remove("display-cell");
      if (isChecked) {
        c.classList.add("display-cell");
      }
  })
}
//creating clones for rows and details
let clone = document.querySelectorAll("#myTable tbody tr");
let cloneRow = clone[1].cloneNode(true);
let cloneDet = clone[2].cloneNode(true);

function toggleHidden(icon) {
  const hiddenDiv = icon.parentElement.parentElement.nextElementSibling;
  //see if dropdowntextarea is in classlist. if exists, remove, else add
  if (hiddenDiv.classList.contains("dropDownTextArea")) {
    hiddenDiv.classList.remove("dropDownTextArea");
  }
  else {
    hiddenDiv.classList.add("dropDownTextArea");
  }
}


//check if checkbox is checked 
inputcheckBox.forEach(input => {
  input.addEventListener('change', () => {
    toggleCheckBox(input);
  })

  
  const imageDown = input.nextElementSibling.nextElementSibling.nextElementSibling;

  //set onclick listener for image
  imageDown.addEventListener('click', () => {
    toggleHidden(imageDown);
  })

  toggleCheckBox(input);
})
