const seattleData = document.getElementById("seattleData");
const td = document.createElement("td");
td.textcontent = `${seattle.location};`;

for (let i = 0; i < hours.length; i++) {
  td.textContent = `${seattle.cookiePerHour[i]}`;
  seattleData.appendChild(td);
}

function hoursHeader() {
  for (let i = 0; i < hours.length; i++) {
    const hoursHeader = document.getElementById("hoursHeader");
    const th = document.createElement("th");
    th.textContent = `${hours[i]}`;
    hoursHeader.appendChild(th);
  }
}
hoursHeader();