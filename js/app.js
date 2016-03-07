var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

//Object Constructor
function Kiosk(locationName, minCustomers, maxCustomers, avgHourlyCups, avgHourlyLbs) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgHourlyCups = avgHourlyCups;
  this.avgHourlyLbs = avgHourlyLbs;
  this.totalDailyLbs = 0;
  this.hourlyCustomersArray = [];
  this.hourlyCupsArray = [];
  this.hourlyTogoLbsArray = [];
  this.lbsFromCupsArray = [];
  this.totalHourlyLbsArray = [];
}

Kiosk.prototype.generateData = function() {
  for(var i = 0; i < hours.length; i++) {
    this.hourlyCustomersArray.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    this.hourlyCupsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyCups);
    this.hourlyTogoLbsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyLbs);
    this.lbsFromCupsArray.push(this.hourlyCupsArray[i] / 20);
    this.totalHourlyLbsArray.push(this.hourlyTogoLbsArray[i] + this.lbsFromCupsArray[i]);
    this.totalDailyLbs += this.totalHourlyLbsArray[i];
  }
  return this.totalDailyLbs;
};

function renderData(location) {
  location.generateData(); // Calls the generateData method for the object when the renderData method is called, for example pikePlace.renderData();

  var tableEl = document.createElement('table');
  document.body.appendChild(tableEl);
  var tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);

  var locationTHEl = document.createElement('th');
  locationTHEl.textContent = location.locationName;
  tableRow.appendChild(locationTHEl);
  for(var i = 0; i < hours.length; i++) {
    var hoursHeader = document.createElement('th');
    hoursHeader.textContent = hours[i];
    tableRow.appendChild(hoursHeader);
  }
  tableEl.appendChild(tableRow);

  var arrayOfLabels = ['Customers', 'Cups', 'To-go Lbs', 'Lbs from Cups'];
  createTableRow(      );

  var newTableRow = document.createElement('tr');
  var customersLabel = document.createElement('th');
  customersLabel.textContent = 'Customers';
  newTableRow.appendChild(customersLabel);
  for(var j = 0; j < hours.length; j++) {
    var customerData = document.createElement('td');
    customerData.textContent = location.hourlyCustomersArray[i];
    tableRow.appendChild(customerData);
  }
}
//Generic function to create a table row with table head cell and table data
function createTableRow() {
  var newTableRow = document.createElement('tr');
  var newLabelHeader = document.createElement('th');
  newLabelHeader.textContent = labelHeaderName;
  newTableRow.appendChild(newLabelHeader);
  document.body.appendChild(newTableRow);
  return newTableRow;
}

//Create instances
var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var seaPublicLibrary = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.7);
var southLakeUnion = new Kiosk('South Lake Union', 38, 88, 1.3, 3.7);
var seatacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);

// var locations = [pikePlace, capitolHill, seaPublicLibrary, southLakeUnion, seatacAirport, websiteSales];

// var pikePlace = {
//   name: 'Pike Place Market',
//   minCustomers: 14,
//   maxCustomers: 55,
//   avgHourlyCups: 1.2,
//   avgHourlyLbs: 3.7,
//   totalDailyLbs: 0,
//   hourlyCustomersArray: [],
//   hourlyCupsArray: [],
//   hourlyTogoLbsArray: [],
//   lbsFromCupsArray: [],
//   totalHourlyLbsArray: [],
//
//   hourlyCustomers: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.hourlyCustomersArray.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
//     }
//   },
//   hourlyCups: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.hourlyCupsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyCups);
//     }
//   },
//   hourlyTogoLbs: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.hourlyTogoLbsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyLbs);
//     }
//   },
//   lbsFromCups: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.lbsFromCupsArray.push(this.hourlyCupsArray[i] / 20);
//     }
//   },
//   calcTotalHourlyLbs: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.totalHourlyLbsArray.push(this.hourlyTogoLbsArray[i] + this.lbsFromCupsArray[i]);
//     }
//   },
//   calcTotalDailyLbs: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.totalDailyLbs += this.totalHourlyLbsArray[i];
//     }
//     return this.totalDailyLbs;
//   },
//   renderData: function() {
//     this.hourlyCustomers();
//     this.hourlyCups();
//     this.hourlyTogoLbs();
//     this.lbsFromCups();
//     this.calcTotalHourlyLbs();
//     this.calcTotalDailyLbs();
//
//     var ulEl = document.createElement('ul');
//     var location = document.createTextNode(this.name);
//     ulEl.appendChild(location);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var newText = document.createTextNode(hours[i] + ': ' + this.totalHourlyLbsArray[i].toFixed(1) + ' lbs [' + this.hourlyCustomersArray[i] + ' customers, ' + this.hourlyCupsArray[i].toFixed(1) + ' cups (' + this.lbsFromCupsArray[i].toFixed(1) + ' lbs), ' + this.hourlyTogoLbsArray[i].toFixed(1) + ' lbs to-go]');
//       liEl.appendChild(newText);
//       ulEl.appendChild(liEl);
//     }
//     document.body.appendChild(ulEl);
//     var displayTotalLbs = document.createElement('li');
//     displayTotalLbs.textContent = 'Total daily lbs at this location: ' + this.totalDailyLbs.toFixed(1) + ' lbs';
//     ulEl.appendChild(displayTotalLbs);
//   }
// };
// pikePlace.renderData();
// capitolHill.renderData();
// seaPublicLibrary.renderData();
// southLakeUnion.renderData();
// seatacAirport.renderData();
// websiteSales.renderData();
