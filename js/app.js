var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

//object constructor
function Kiosk(minCustomers, maxCustomers, avgHourlyCups, avgHourlyLbs) {
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
    this.hourlyCustomersArray[i].push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    this.hourlyCupsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyCups);
    this.hourlyTogoLbsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyLbs);
    this.lbsFromCupsArray.push(this.hourlyCupsArray[i] / 20);
    this.totalHourlyLbsArray.push(this.hourlyTogoLbsArray[i] + this.lbsFromCupsArray[i]);
    this.totalDailyLbs += this.totalHourlyLbsArray[i];
  }
  return this.totalDailyLbs;
};

Kiosk.prototype.renderData = function() {
//write the instructions needed to render the table to the page
//1)Create table element
//2)Create table row element
//3)Create table data element
//4)Give the table data element content
//5)Append table data element to the table row element
//6)Append table row element to the table element
//7)Append table element to the document
};

//Create instances
var pikePlace = new Kiosk(14, 55, 1.2, 3.7);
var capitolHill = new Kiosk(32, 48, 3.2, 0.4);
var seaPublicLibrary = new Kiosk(49, 75, 2.6, 0.7);
var southLakeUnion = new Kiosk(38, 88, 1.3, 3.7);
var seatacAirport = new Kiosk(68, 124, 1.1, 2.7);
var websiteSales = new Kiosk(3, 6, 0, 6.7);

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
