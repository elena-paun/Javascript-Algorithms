const stat = (strg) => {
  // find the range
  // max - min
  let hour, minute, second;
  let time = [],
    differenceRange,
    rangeHour,
    averageHour;
  let race = strg.split(", ");
  race = race.map((el, i, arr) => {
    el = el.split("|");
    hour = el[0] * 3600;
    hour = Number(hour);
    minute = el[1] * 60;
    minute = Number(minute);
    second = el[2];
    second = Number(second);
    time.push(hour + minute + second);
  });
  differenceRange = Math.max(...time) - Math.min(...time);
  rangeMinute = differenceRange / 60;
  rangeHour = rangeMinute / 60;
  let rngHour = Math.floor(rangeHour);
  rangeMinute = (rangeHour - rngHour) * 60;
  let rngMinute = Math.floor(rangeMinute);
  let rangeSecond = Math.floor(differenceRange - rngMinute * 60);
  if (rngHour < 10) {
    rngHour = `0${rngHour}`;
  }

  rangeSecond = rangeSecond % 60;
  if (rngMinute < 10) {
    rngMinute = `0${rngMinute}`;
  }
  if (rangeSecond < 10) {
    rangeSecond = `0${rangeSecond}`;
  }

  // get average time

  let average = time.reduce((a, b) => a + b);
  average = average / race.length;
  averageMinute = average / 60;
  averageHour = averageMinute / 60;
  let avgHour = Math.floor(averageHour);
  averageMinute = (averageHour - avgHour) * 60;
  let avgMinutes = Math.floor(averageMinute);
  let averageSeconds = Math.floor(average - avgMinutes * 60);

  if (avgHour < 10) {
    avgHour = `0${avgHour}`;
  }

  averageSeconds = averageSeconds % 60;
  if (avgMinutes < 10) {
    avgMinutes = `0${avgMinutes}`;
  }
  if (averageSeconds < 10) {
    averageSeconds = `0${averageSeconds}`;
  }
  // get median time
  let medianValue = [];
  let medianValues = time.sort((a, b) => a - b);
  if (medianValues.length % 2 !== 0) {
    medianValue.push(
      medianValues.slice(medianValues.length / 2, medianValues.length / 2 + 1)
    );
  }
  if (medianValues.length % 2 == 0) {
    medianValue.push(
      medianValues.slice(
        medianValues.length / 2 - 1,
        medianValues.length / 2 + 1
      )
    );
  }
  console.log(medianValues);
  console.log(medianValue);
  medianValue.map((el, i, arr) => {
    if (medianValue[i].length > 1) {
      //medianValue = medianValue.reduce((a, b) => a + b);
      medianValue = medianValue[i].reduce((a, b) => a + b);
      medianValue = medianValue / 2;
    }
  });

  let medianMinute = medianValue / 60;
  let medianHour = medianMinute / 60;
  let mdnHour = Math.floor(medianHour);
  medianMinute = (medianHour - mdnHour) * 60;
  let mdnMinute = Math.floor(medianMinute);
  let medianSecond = Math.floor(medianValue - mdnMinute * 60);
  medianSecond = medianSecond % 60;
  if (mdnHour < 10) {
    mdnHour = `0${mdnHour}`;
  }
  if (medianSecond < 10) {
    medianSecond = `0${medianSecond}`;
  }
  if (mdnMinute < 10) {
    mdnMinute = `0${mdnMinute}`;
  }
  return `Range: ${rngHour}|${rngMinute}|${rangeSecond} Average: ${avgHour}|${avgMinutes}|${averageSeconds} Median: ${mdnHour}|${mdnMinute}|${medianSecond}`;
};

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17, 2|17|17"));
