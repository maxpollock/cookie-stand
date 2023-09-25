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

const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    let product = 1;
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
      this.totalSold += this.cookiePerHour[i];
    }
  },
};

const tokoyo = {
  location: "Tokoyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    let product = 1;
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
      this.totalSold += this.cookiePerHour[i];
    }
  },
};

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    let product = 1;
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
      this.totalSold += this.cookiePerHour[i];
    }
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    let product = 1;
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
      this.totalSold += this.cookiePerHour[i];
    }
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    let product = 1;
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
      this.totalSold += this.cookiePerHour[i];
    }
  },
};

function createList(cityID, cityName) {
  const iD = document.getElementById(cityID);

  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.textContent = cityName.location;
  article.appendChild(h2);

  const ul = document.createElement("ul");
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${cityName.cookiePerHour[i]} cookies`;
    ul.appendChild(li);
  }

  const liTotal = document.createElement("li");
  liTotal.textContent = `Total: ${cityName.totalSold} cookies`;
  ul.appendChild(liTotal);

  h2.appendChild(ul);
  cityID.appendChild(article);
}

seattle.calcSales();
tokoyo.calcSales();
dubai.calcSales();
paris.calcSales();
lima.calcSales();

createList(seattleData, seattle);
createList(tokoyoData, tokoyo);
createList(dubaiData, dubai);
createList(parisData, paris);
createList(limaData, lima);
