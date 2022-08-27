function onFormSubmit(){
  var formData = readFormData();
  return insertNewRecord(formData);
}
function deleteMe()  {
  
      var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    table.deleteRow(0);
  }

function readFormData() 
{
  var formData = {};
     formData["name1"] = document.getElementById("name1").value;
     formData["name2"] = document.getElementById("name2").value;
     formData["name3"] = document.getElementById("name3").value;
     formData["name4"] = document.getElementById("name4").value;
 
  return formData;
}

function insertNewRecord(data){
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(0);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data["name1"];
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data["name2"];
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data["name3"];
  cell4 = newRow.insertCell(3);
   cell4.innerHTML = data["name4"];
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = '<input id="deleteMe" type="button" onclick="deleteMe();" value="Delete"/>'; 
  return;
} 