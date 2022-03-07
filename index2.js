// const { fetchMyIP } = require(`./iss_promised`);
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const { nextISSTimesForMyLocation } = require('./iss_promised');



nextISSTimesForMyLocation()
  .then((passTimes) => {
    time(passTimes);
  })
  .catch((error) => {
    console.log(`It didn't work!`, error.message);
  });

const time = passTimes => {
  for (const pass of passTimes) {
    const data = new Date(0);
    data.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${data} for ${duration} seconds!`);
  }
};
  