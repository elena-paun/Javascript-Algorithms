const formatDuration = (seconds) => {
  let str = "";
  let years, days, hours, minutes;
  if (seconds == 0) {
    str += "now";
  }

  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  years = Math.floor(days / 365);
  days = days % 365;

  if (days == 0) {
    if (years > 1) {
      str += years + " " + "years";
    } else if (years == 1) {
      str += years + " " + "year";
    }
  } else if (years > 1) {
    str += years + " " + "years" + ", ";
  } else if (years == 1) {
    str += years + " " + "year" + ", ";
  }

  if (hours == 0) {
    if (days > 1) {
      str += days + " " + "days" + ", ";
    } else if (days == 1) {
      str += days + " " + "day";
    }
  } else if (days > 1 || hours == 0) {
    str += days + " " + "days" + ", ";
  } else if (days == 1) {
    str += days + " " + "day" + ", ";
  }
  if (minutes == 0 || seconds == 0) {
    if (hours > 1) {
      str += +hours + " " + "hours" + " and ";
    } else if (hours == 1) {
      str += hours + " " + "hour";
    }
  } else if (hours > 1) {
    str += +hours + " " + "hours" + ", ";
  } else if (hours == 1) {
    str += hours + " " + "hour" + ", ";
  }

  if (seconds == 0) {
    if (minutes > 1) {
      str += minutes + " " + "minutes";
    } else if (minutes == 1) {
      str += minutes + " " + "minute";
    }
  } else if (minutes > 1) {
    str += minutes + " " + "minutes" + " and ";
  } else if (minutes == 1) {
    str += minutes + " " + "minute" + " and ";
  }
  if (seconds > 1) {
    str += seconds + " " + "seconds";
  } else if (seconds == 1) {
    str += seconds + " " + "second";
  }

  return str;
};

let a = formatDuration(123456678902434);
console.log(a);
