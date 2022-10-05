
const getAllHourShift = (shifts, shiftActive) => {
  const hourShift = shifts.reduce((acc, shift) => {
    if (shift.shiftName === shiftActive) {
      if (shift.to.hour < shift.from.hour) {
        acc = {
          hourFrom: parseInt(shift.from.hour),
          hourTo: parseInt(shift.to.hour) + 24,
        }
      } else {
        acc = {
          hourFrom: parseInt(shift.from.hour),
          hourTo: parseInt(shift.to.hour),
        };
      }
    }
    return acc;
  }, {});

  const hours = [];

  for (let i = hourShift.hourFrom; i <= hourShift.hourTo; i++) {
    if (i < 24) {
      hours.push(i);
    } else {
      hours.push(i - 24);
    }
  }

  return hours;
}

const convertTime = (hour, minute) => {
  const h = hour < 10 ? `0${hour}` : hour;
  const m = minute < 10 ? `0${minute}` : minute;

  return h + ":" + m
}

export { getAllHourShift, convertTime };

