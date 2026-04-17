window.onload = function () {
  fetchData();
};

function fetchData() {
  let container = document.getElementById("productList");

  container.innerHTML = "<p>Loading...</p>";

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      displayProducts(data);
    })
    .catch(() => {
      container.innerHTML = "<p>Error loading data</p>";
    });
}

function displayProducts(items) {
  let container = document.getElementById("productList");
  container.innerHTML = "";

  items.forEach(item => {
    let div = document.createElement("div");
    div.className = "product-card";
    div.innerText = item.name;

    container.appendChild(div);
  });
}