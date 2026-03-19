function getSalami() {
  let name = document.getElementById("name").value;

  let amounts = ["10৳", "50৳", "100৳", "500৳", "1000৳"];

  let random = amounts[Math.floor(Math.random() * amounts.length)];

  document.getElementById("result").innerHTML =
    name + " got " + random + " Eid Salami 🎁";
}
