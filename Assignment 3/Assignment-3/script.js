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


function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(table.rows.length);
  const newDiv = document.createElement("div");
  const childDivView = document.createElement("div");
  //
  var cell1 = row.insertCell(0);
  const divRow1 = document.createElement("div");
  divRow1.className = "vert";
  divRow1.id="divrow1";
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.className="ico";
  x.id="check";
  x.addEventListener('change', function() {
    handleChkboxTgle(x);
  });


  var img = document.createElement("img");
  img.src ="down.png";
img.className="ico";
img.addEventListener('click', () => {
  tglDropDwn(img);
})
  divRow1.appendChild(x);
  divRow1.appendChild(img);
  cell1.appendChild(divRow1);

  //
  var cell2 = row.insertCell(1);
  const para = document.createElement("p");
  para.innerText = "Student "+(table.rows.length-4);
  cell2.appendChild(para);
  //
  var cell3 = row.insertCell(2);
  const para2 = document.createElement("p");
  para2.innerText = "Teacher "+(table.rows.length-4);
  cell3.appendChild(para2);
  //
   //
   var cell4 = row.insertCell(3);
   const para3 = document.createElement("p");
   para3.innerText = "Approved";
   cell4.appendChild(para3);
   //
 //
 var cell5 = row.insertCell(4);
 const para4 = document.createElement("p");
 para4.innerText = "Fall";
 cell5.appendChild(para4);
 //
  //
  var cell6 = row.insertCell(5);
  const para5 = document.createElement("p");
  para5.innerText = "TA";
  cell6.appendChild(para5);
//
var cell7 = row.insertCell(6);
const para6 = document.createElement("p");
para6.innerText = "12345";
cell7.appendChild(para6);
//
//
var cell8 = row.insertCell(7);
const para7 = document.createElement("p");
para7.innerText = "100%";
cell8.appendChild(para7);
//
//
var cell9 = row.insertCell(8);
let deleteHome = document.createElement("button");
deleteHome.className="delete_button"
deleteHome.innerText = "Delete"
cell9.appendChild(deleteHome);
//



  const childDivHidden = document.createElement("div");
  newDiv.appendChild(childDivView);
  newDiv.appendChild(childDivHidden);
  
 
alert("Record added Successfully");



var row2 = table.insertRow(table.rows.length);
row2.a
}



function checked(check) {
  
  handleChkboxTgle(check);

}

function handleChkboxTgle(checkbox) {

  let Row = checkbox.parentElement.parentElement.parentElement;

  let delColmn = Row.querySelector(":nth-child(9)");
  removeAllChildNodes(delColmn);

  let editColmn = Row.querySelector(":nth-child(10)");
  removeAllChildNodes(editColmn);
  Row.bgColor = '';
  if (checkbox.checked) {
    Row.bgColor = 'yellow';
    delColmn.appendChild(newDelBtn(Row));
    editColmn.appendChild(newEditBtn());

  }

  
}

function removeAllChildNodes(){
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}
}


function tglDropDwn(img) {
  const collapsible = img.parentElement.parentElement.nextElementSibling;

  if (collapsible.classList.contains("dropDownTextArea")) {
    collapsible.classList.remove("dropDownTextArea");
  }
  else {
    collapsible.classList.add("dropDownTextArea");
  }
}

function viewDelBtn(){

}