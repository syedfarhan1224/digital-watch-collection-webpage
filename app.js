var watches = [
  {
    name: "Armitron Sport",
    title: "Men's Digital Chronograph Resin Strap Watch",
    types: ["Black", "Blue", "Green"],
    image: "https://m.media-amazon.com/images/I/81CT5ZA2hvL._AC_SY679_.jpg",
    description: "Sporty and durable with multiple functions.",
  },
  {
    name: "Timex Ironman",
    title: "Essential 10 Full-Size Watch",
    types: ["Black", "Pink", "Blue"],
    image: "https://m.media-amazon.com/images/I/91nnp+DGh-L._AC_UL320_.jpg",
    description: "Water-resistant with lap timer and alarm.",
  },
  {
    name: "Casio G-Shock",
    title: "G-Shock Analog-Digital Watch",
    types: ["Red", "Black", "Yellow"],
    image: "https://m.media-amazon.com/images/I/81eK1Pb5-SL._AC_UL320_.jpg",
    description: "Shock-resistant with robust design.",
  },
  {
    name: "Garmin Forerunner",
    title: "GPS Running Watch",
    types: ["Black", "White"],
    image: "https://m.media-amazon.com/images/I/71uyGBzaxlL._AC_UY218_.jpg",
    description: "Built-in GPS with heart rate monitoring.",
  },
  {
    name: "Fitbit Charge",
    title: "Fitness and Activity Tracker",
    types: ["Black", "Blue", "Rose Gold"],
    image: "https://m.media-amazon.com/images/I/71pt3VmYV1L._AC_UY218_.jpg",
    description: "Tracks activity, sleep, and heart rate.",
  },
  {
    name: "Samsung Galaxy",
    title: "Smartwatch with Fitness Tracking",
    types: ["Black", "Silver", "Rose Gold"],
    image: "https://m.media-amazon.com/images/I/711f6KLsMaL._AC_UY218_.jpg",
    description: "Smart features with fitness tracking.",
  },
  {
    name: "Apple Watch Series",
    title: "GPS + Cellular",
    types: ["Space Gray", "Silver", "Gold"],
    image: "https://m.media-amazon.com/images/I/61fkjgSHKaL._AC_UY218_.jpg",
    description: "Advanced health monitoring and connectivity.",
  },
];

function renderWatches() {
  var box = document.getElementById("box");
  box.innerHTML = "";
  watches.forEach((data, ind) => {
    var watchElement = `
      <div class="fruit" id="${ind}">
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}">
        <p>
          <span class="first">Title:</span><span class="last">${
            data.title || "No title available"
          }</span>
          <span class="first">Description:</span><span class="last">${
            data.description || "No description available"
          }</span>
          <span class="first">Types:</span><span class="last">${data.types.join(
            ", "
          )}</span>
        </p>
        <div class="buttons">
          <button onclick="editWatch(${ind})">Edit</button>
          <button onclick="deleteWatch(${ind})">Delete</button>
        </div>
      </div>`;
    box.innerHTML += watchElement;
  });
}

function deleteWatch(index) {
  watches.splice(index, 1);
  renderWatches();
}

function editWatch(index) {
  var field = prompt(
    "Select field to edit: title, image, description, types",
    "title"
  );
  var newValue = prompt(`Enter new value for ${field}`);
  if (watches[index][field] !== undefined) {
    watches[index][field] = field === "types" ? newValue.split(",") : newValue;
    renderWatches();
  } else {
    alert("Invalid field");
  }
}

renderWatches();
