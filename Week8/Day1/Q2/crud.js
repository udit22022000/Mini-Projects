document.getElementById("btn-1").addEventListener("click", loadData);
document.getElementById("btn-2").addEventListener("click", postData);
var cards = document.getElementById("cards");
var data = [];

function loadData() {
  var xhr = new XMLHttpRequest();
  var url = "http://apititans.herokuapp.com/api/movies";
  xhr.open("GET", url, true);
  var output = "";
  xhr.onload = function () {
    data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      for (i in data) {
        output += `<div class="card">
                            <img src=${data[i].img}></img>
                            <h4>${data[i].name}</h4>
                            <p>Year: ${data[i].year}</p>
                            <button id="${data[i].id}" onClick="deleteData(this)"> DELETE </button>
                            <button id="${data[i].id}" onClick="updateData(this)"> UPDATE </button>
                        </div>`;
      }
    }

    cards.innerHTML = output;
  };

  xhr.send();
}

function postData() {
  var url = "http://apititans.herokuapp.com/api/movies";
  var temp = {};
  temp.name = document.getElementById("name").value;
  temp.year = document.getElementById("year").value;
  temp.img = document.getElementById("img").value;

  var json = JSON.stringify(temp);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("name").value = "";
      document.getElementById("year").value = "";
      document.getElementById("img").value = "";
      loadData();
    } else {
      console.log("Error while posting the data");
    }
  };
  xhr.send(json);
}

function deleteData(event) {
  var id = event.id;
  var xhr = new XMLHttpRequest();
  var url = `http://apititans.herokuapp.com/api/movies/${id}`;
  xhr.open("DELETE", url);
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      loadData();
    } else {
      console.log("Error while deleting the data");
    }
  };
  xhr.send();
}

function updateData(event) {
  var item = data.find(function (d) {
    return d.id.toString() == event.id;
  });

  var url = `http://apititans.herokuapp.com/api/movies/${item.id}`;
  var temp = {};
  temp.name = "Swades";
  temp.year = 2004;
  temp.img =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiF11Z-BIWIMtfhc-lveqTMnFUfncbAumG96uzhOzJhEIFJmLw";
  var json = JSON.stringify(temp);
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      loadData();
    } else {
      console.log("Error while updating");
    }
  };
  xhr.send(json);
}
