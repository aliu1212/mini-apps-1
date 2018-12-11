// let jsonData = document.getElementById("input").value;
let formSubmit = (e) => {
  let jsonData = document.getElementById("input").value;
  // console.log('data', jsonData) 
  let jsonStr = JSON.parse(jsonData)
  console.log(jsonStr);
  e.preventDefault();
  console.log(e);
}

