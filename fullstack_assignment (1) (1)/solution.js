function solution(D) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const sums = Array(7).fill(null);

  for (const dateStr in D) {
    const date = new Date(dateStr);
    const jsDay = date.getDay(); // 0=Sun, 1=Mon
    const idx = jsDay === 0 ? 6 : jsDay - 1;

    if (sums[idx] === null) sums[idx] = 0;
    sums[idx] += D[dateStr];
  }

  for (let i = 0; i < 7; i++) {
    if (sums[i] === null) {
      let prev = i - 1;
      let next = i + 1;

      while (prev >= 0 && sums[prev] === null) prev--;
      while (next < 7 && sums[next] === null) next++;

      sums[i] = Math.floor((sums[prev] + sums[next]) / 2);
    }
  }

  const result = {};
  for (let i = 0; i < 7; i++) {
    result[days[i]] = sums[i];
  }

  return result;
}

module.exports = solution;
