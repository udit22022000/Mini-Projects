document.getElementById("get_btn").addEventListener("click", loadData);
document.getElementById("post_btn").addEventListener("click", postData);

function loadData() {
  var xhr = new XMLHttpRequest();
  var url = "https://titanspokemon.herokuapp.com/api/pokemons";
  xhr.open("GET", url);

  var result = "";
  xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == 200) {
      for (var i = 0; i < response.length; i++) {
        if (response[i] === undefined) {
          continue;
        }
        var text1 = response[i].name;
        var text2 = response[i].candy;
        var text3 = response[i].img;
        var text4 = response[i].weaknesses;
        var text5 = response[i].next_evolution;
        var text6 = "";
        // if (text5 != undefined) {
        //   for (var k = 0; k < text5.length; k++) {
        //     if (text5[i].name == undefined) {
        //       break;
        //     }
        //     text6 += text5[i].name + ", ";
        //   }
        // }
        result += `<div class="card">
                <img src=${text3}>
                <div><b>Name :</b>${text1}</div>
                <div><b>Candy :</b>${text2}</div>
                <div><b>Weaknesses :</b>${text4}</div>
                </div>`;
      }
      document.getElementById("display-area").innerHTML = result;
    }
  };
  xhr.send();
}

function postData() {
  var url = "https://titanspokemon.herokuapp.com/api/pokemons";
  var temp = {};
  temp.name = document.getElementById("name").value;
  temp.candy = document.getElementById("candy").value;
  temp.img = document.getElementById("img").value;
  temp.weaknesses = document.getElementById("weak").value.split(",");
  temp.next_evolution = [];
  var ne_values = document.getElementById("evolution").value.split(",");
  for (var i = 0; i < ne_values.length; i++) {
    temp.next_evolution.push({ name: ne_values[i] });
  }
  var json = JSON.stringify(temp);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("name").value = "";
      document.getElementById("candy").value = "";
      document.getElementById("img").value = "";
      document.getElementById("weak").value = "";
      document.getElementById("evolution").value = "";
      loadData();
    } else {
      console.log("Failed to load data");
    }
  };
  xhr.send(json);
}
