export default function (date: Date | string) {
  const now = timeInSeconds(null);
  const then = timeInSeconds(date);

  const difference = now - then;

  const times = {
    seconds: difference % 60,
    mins: Math.floor(difference / 60) % 60,
    hours: Math.floor(difference / 3600) % 24,
    days: Math.floor(difference / 86400) % 30,
    months: Math.floor(difference / 2620800) % 12,
    years: Math.floor(difference / 31449600),
  };
  const timesOutput = {
    seconds: times.seconds + 's',
    mins: times.mins + 'm',
    hours: times.hours + 'h' + times.mins ? times.mins + 'm' : '',
    days: times.days + 'd' + times.hours ? times.hours + 'h' : '',
    months: times.months + 'M' + times.days ? times.days + 'd' : '',
    years: times.years + 'Y' + times.months ? times.months + 'M' : '',
  };

  let output = ``;
  if (difference < 60) {
    output = timesOutput.seconds;
  } else if (difference < 3600) {
    output = timesOutput.mins;
  } else if (difference < 86400) {
    output = timesOutput.hours;
  } else if (difference < 2620800) {
    output = timesOutput.days;
  } else if (difference < 31449600) {
    output = timesOutput.months;
  } else {
    output = timesOutput.years;
  }
  output += ' ago';
  return output;
}

function timeInSeconds(date: Date | string | null) {
  const now = date ? new Date(date) : new Date();
  const nowInMS = now.getTime();
  return Math.floor(nowInMS / 1000);
}
