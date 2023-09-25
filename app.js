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
  custPerHour: [], // avgCookiesPerCust
  cookiePerHour: [],
  totalSold: 0,
  calcSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randNum);
      this.cookiePerHour.push(Math.ceil(randNum * this.avgSale));
    }
  },
};

seattle.calcSales();

const tokoyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
};

const dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
};

const paris = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
};

const lima = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
};

// Display the values of each array as unordered lists in the browser.
const seattleData = document.getElementById("seattleData");

const article = document.createElement("article");
const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiePerHour[i]} cookies`;
  ul.appendChild(li);
}

h2.appendChild(ul);
seattleData.appendChild(article);

// Calculating the sum of these hourly totals
