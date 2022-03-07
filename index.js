const { fetchMyIP } = require(`./iss`);
const { fetchCoordsByIP } = require(`./iss`);
const { fetchISSFlyOverTimes } = require(`./iss`);
const { nextISSTimesForMyLocation } = require(`./iss`);

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:" , ip);
// });



// fetchCoordsByIP('66.183.69.118', (error, coordinates) => {
//   if (error) {
//     console.log(`It does not work`, error);
//     return;
//   }
//   console.log(`It workds:`, coordinates);
// });


// const cor = { latitude: 49.1297, longitude: -123.1658 };
// fetchISSFlyOverTimes(cor, (error,passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Flyover times:", passTimes);
// });

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn;t work!", error);
//   }
//   console.log(passTimes);
// });

const time = passTimes => {
  for (const pass of passTimes) {
    const data = new Date(0);
    data.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${data} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  time(passTimes);
});