document.getElementById("btn-1").addEventListener("click", loadData);
document.getElementById("btn-2").addEventListener("click", postData);

var data = [];

function loadData() {
  var cryptoList = document.getElementById("crypt_items");
  var xhr = new XMLHttpRequest();
  var url = "https://titanscrypto.herokuapp.com/api/cryptos";
  xhr.open("GET", url, true);
  var output = "";
  xhr.onload = function () {
    data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      for (i in data) {
        output += `<tr>
                    <td>${data[i].symbol}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].rank}</td>
                    <td>${data[i].price_usd}</td>
                    <td>${data[i].market_cap_usd}</td>
                    <td><button id="${data[i].id}" onClick="deleteData(this)"> DELETE </button></td>
                    <td><button id="${data[i].id}" onClick="updateData(this)"> UPDATE </button></td>
                    </tr>`;
      }
    }
    cryptoList.innerHTML = output;
  };
  xhr.send();
}

function postData() {
  var temp = {};
  temp.symbol = document.getElementById("symbol").value;
  temp.name = document.getElementById("name").value;
  temp.rank = document.getElementById("rank").value;
  temp.price_usd = document.getElementById("price_used").value;
  temp.market_cap_usd = document.getElementById("market_cap_used").value;

  var json = JSON.stringify(temp);
  var xhr = new XMLHttpRequest();
  var url = "https://titanscrypto.herokuapp.com/api/cryptos";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("symbol").value = "";
      document.getElementById("name").value = "";
      document.getElementById("rank").value = "";
      document.getElementById("price_used").value = "";
      document.getElementById("market_cap_used").value = "";
      loadData();
    } else {
      console.log("Error while posting");
    }
  };
  xhr.send(json);
}

function deleteData(event) {
  var id = event.id;
  var xhr = new XMLHttpRequest();
  var url = `https://titanscrypto.herokuapp.com/api/cryptos/${id}`;
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
    return d.id.toString() === event.id;
  });

  var url = `https://titanscrypto.herokuapp.com/api/cryptos/${item.id}`;
  var temp = {};
  temp.symbol = document.getElementById("Usymbol").value;
  temp.name = document.getElementById("Uname").value;
  temp.rank = document.getElementById("Urank").value;
  temp.price_usd = document.getElementById("Uprice_used").value;
  temp.market_cap_usd = document.getElementById("Umarket_cap_used").value;

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
  document.getElementById("Usymbol").value = "";
  document.getElementById("Uname").value = "";
  document.getElementById("Urank").value = "";
  document.getElementById("Uprice_used").value = "";
  document.getElementById("Umarket_cap_used").value = "";
  xhr.send(json);
}
