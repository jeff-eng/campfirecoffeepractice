var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

var pikePlace = {
  name: 'Pike Place Market',
  minCustomers: 14,
  maxCustomers: 55,
  avgHourlyCups: 1.2,
  avgHourlyLbs: 3.7,
  totalDailyLbs: 0,
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 32,
  maxCustomers: 48,
  avgHourlyCups: 3.2,
  avgHourlyLbs: 0.4,
  totalDailyLbs: 0,
};

var seaPublicLibrary = {
  name: 'Seattle Public Library',
  minCustomers: 49,
  maxCustomers: 75,
  avgHourlyCups: 2.6,
  avgHourlyLbs: 30.2,
  totalDailyLbs: 0,
};

var southLakeUnion = {
  name: 'South Lake Union',
  minCustomers: 38,
  maxCustomers: 88,
  avgHourlyCups: 1.3,
  avgHourlyLbs: 3.7,
  totalDailyLbs: 0,
};

var seatacAirport = {
  name: 'Sea-Tac Airport',
  minCustomers: 68,
  maxCustomers: 124,
  avgHourlyCups: 1.1,
  avgHourlyLbs: 2.7,
  totalDailyLbs: 0,
};

var websiteSales = {
  name: 'Website Sales',
  minCustomers: 3,
  maxCustomers: 6,
  avgHourlyCups: 0,
  avgHourlyLbs: 6.7,
  totalDailyLbs: 0,
  hourlyCustomersArray: [],
  hourlyCupsArray: [],
  hourlyTogoLbsArray: [],
  lbsFromCupsArray: [],
  totalHourlyLbsArray: [],
  hourlyCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.hourlyCustomersArray.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  hourlyCups: function() {
    for(var i = 0; i < hours.length; i++) {
      this.hourlyCupsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyCups);
    }
  },
  hourlyTogoLbs: function() {
    for(var i = 0; i < hours.length; i++) {
      this.hourlyTogoLbsArray.push(this.hourlyCustomersArray[i] * this.avgHourlyLbs);
    }
  },
  lbsFromCups: function() {
    for (var i = 0; i < hours.length; i++) {
      this.lbsFromCupsArray.push(this.hourlyCupsArray[i] / 20);
    }
  },
  calcTotalHourlyLbs: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalHourlyLbsArray.push(this.hourlyTogoLbsArray[i] + this.lbsFromCupsArray[i]);
    }
  },
  calcTotalDailyLbs: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalDailyLbs += this.totalHourlyLbsArray[i];
    }
  }
}
