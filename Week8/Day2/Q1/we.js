function Changer(event) {
  var ele1 = document.getElementById("desc1");
  var ele2 = document.getElementById("desc2");

  ele1.style.visibility = "hidden";
  ele2.style.visibility = "hidden";

  var button = event.target;
  if (button.id == "first") {
    ele1.style.visibility = "visible";
  }
  if (button.id == "second") {
    ele2.style.visibility = "visible";
  }
}

var topics = document.querySelectorAll(".topic-button");
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener("click", Changer);
}
