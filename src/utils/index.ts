export function getDayNumbers(now: Date) {
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  };
}

export function getClockNumbers(now: Date) {
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}

export function objShallowCompare(first: object, second: object) {
  const entries = Object.entries(first);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    if (!second[key] || second[key] !== value) return false;
  }
  return true;
}

interface IClock {
  hour: number;
  minute: number;
  second: number;
}

type GetDegreeArgs = IClock | null;

export function getDegree(clock: GetDegreeArgs): [number, number, number] {
  if (!clock) return [0, 0, 0];
  const { hour, minute, second } = clock;
  const secondDeg = second * 6;

  const minuteAddDeg = 6 * (second / 60);
  const minuteDeg = minute * 6 + minuteAddDeg;

  const hourAddDeg = 30 * (minute / 60);
  const hourForDeg = hour >= 12 ? hour - 12 : hour;
  const hourDeg = hourForDeg * 30 + hourAddDeg;

  return [hourDeg, minuteDeg, secondDeg];
}
