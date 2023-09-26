// Store the min/max hourly customers, and the average cookies per customer, in object properties.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function headerRow() {
  const headerRow = document.getElementById("headerRow");

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    th.textContent = `${hours[i]}`;
    headerRow.appendChild(th);
  }

  const th = document.createElement("th");
  th.textContent = "Daily Location Total";
  headerRow.appendChild(th);
}

function City(
  location,
  minCust,
  maxCust,
  avgSale,
  custPerHour,
  cookiePerHour,
  totalSold,
  id
) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = custPerHour;
  this.cookiePerHour = cookiePerHour;
  this.totalSold = totalSold;
  this.id = id;
}

const cities = [
  new City("Seattle", 23, 65, 6.3, [], [], 0, "seattleData"),
  new City("Tokoyo", 3, 24, 1.2, [], [], 0, "tokoyoData"),
  new City("Dubai", 11, 38, 3.7, [], [], 0, "dubaiData"),
  new City("Paris", 20, 38, 2.3, [], [], 0, "parisData"),
  new City("Lima", 2, 16, 4.6, [], [], 0, "limaData"),
];

City.prototype.calcSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.custPerHour.push(randNum);
    this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
    this.totalSold += this.cookiePerHour[i];
  }
};

headerRow();

City.prototype.cityRow = function () {
  for (x = 0; x < cities.length; x++) {
    cities[x].calcSales();
  }
  const tr = document.createElement("tr");

  const locationName = document.createElement("td");
  locationName.textContent = `${this.location}`;
  tr.appendChild(locationName);

  for (let i = 0; i < hours.length; i++) {
    const cookieTd = document.createElement("td");
    cookieTd.textContent = `${this.cookiePerHour[i]}`;
    tr.appendChild(cookieTd);
  }
  const totalCookie = document.createElement("td");
  totalCookie.textContent = `${this.totalSold}`;
  tr.appendChild(totalCookie);

  const table = document.getElementById("table");
  table.appendChild(tr);
};

for (i = 0; i < cities.length; i++) {
  cities[i].cityRow();
}

function footerRow() {
  const footer = document.getElementById(table);
  const footerTr = document.createElement("tr");
  footerTr.textContent = "Totals";
  table.appendChild(footerTr);

  for (j = 0; j < hours.length; j++) {
    let product = 0;
    for (i = 0; i < cities.length; i++) {
      product += cities[i].cookiePerHour[j];
    }
    const footerTd = document.createElement("td");
    footerTd.textContent = product;
    footerTr.appendChild(footerTd);
  }
}
footerRow();
