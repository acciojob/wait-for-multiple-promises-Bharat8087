function createPromise(min, max) {
  const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
}

const promises = [
  createPromise(1, 3),
  createPromise(1, 3),
  createPromise(1, 3)
];

const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('tableBody').appendChild(loadingRow);

Promise.all(promises)
  .then((results) => {
    document.getElementById('tableBody').removeChild(loadingRow);

    results.forEach((time, index) => {
      const row = document.createElement('tr');
      const promiseCell = document.createElement('td');
      const timeCell = document.createElement('td');
      promiseCell.textContent = `Promise ${index + 1}`;
      timeCell.textContent = `${time} s`;
      row.appendChild(promiseCell);
      row.appendChild(timeCell);
      document.getElementById('tableBody').appendChild(row);
    });

    const totalTime = results.reduce((acc, curr) => acc + curr, 0);
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    const totalTimeCell = document.createElement('td');
    totalCell.textContent = 'Total';
    totalTimeCell.textContent = `${totalTime.toFixed(3)} s`;
    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTimeCell);
    document.getElementById('tableBody').appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
