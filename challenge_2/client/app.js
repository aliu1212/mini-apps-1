// let jsonData = document.getElementById("input").value;
let formSubmit = (e) => {
  e.preventDefault();
  // before 1st refactor
  // let jsonStr = document.getElementById("input").value;
  // let jsonStr = document.getElementById("filey");
  let jsonStr = document.querySelector("filey");
  // console.log(jsonStr,  e)
  let jsonData = JSON.parse(jsonStr);
  let people = [];
  let addme = (obj) => {
    people.push(obj);
    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        addme(obj.children[i]);
      }
    }
  }
  addme(jsonData);
  let keys = [];
  let resultStr = '';
  for (key in people[0]) {
    if (key !== 'children')
    keys.push(key);
  }
  for (let j = 0; j < keys.length; j++) {
    resultStr += keys[j];
    if (j !== keys.length-1) {
      resultStr += ',';
    } else {
      resultStr += '\n';
    }
  }
  for (let k = 0; k < people.length; k++) {
    for (let l = 0; l < keys.length; l++) {
      resultStr += people[k][keys[l]];
      if (l !== keys.length-1) {
        resultStr += ',';
      } else {
        resultStr += '\n';
      }
    }
  }
  console.log(resultStr);
  document.getElementById("output").innerHTML = resultStr;
  // console.log('keys', keys);


  // console.log(e);
}

