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

export function getDegree(clock: GetDegreeArgs): [string, string, string] {
  if (!clock) return ['', '', ''];
  const { hour, minute, second } = clock;
  const secondRotate = `rotate(${second * 6}deg)`;

  const minuteAddDeg = 6 * (second / 60);
  const minuteRotate = `rotate(${minute * 6 + minuteAddDeg}deg)`;

  const hourAddDeg = 30 * (minute / 60);
  const hourRotate = `rotate(${hour * 30 + hourAddDeg}deg)`;

  return [hourRotate, minuteRotate, secondRotate];
}
