function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

function createPromise(index) {
  return new Promise((resolve) => {
    const time = randomTime(1, 3);
    setTimeout(() => {
      resolve({ index, time: time / 1000 });
    }, time);
  });
}

const promises = [];

for (let i = 1; i <= 3; i++) {
  promises.push(createPromise(i));
}

const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2');
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('your-table-id').appendChild(loadingRow);

Promise.all(promises)
  .then((results) => {
    document.getElementById('your-table-id').removeChild(loadingRow);

    results.forEach(({ index, time }) => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      cell1.textContent = `Promise ${index}`;
      cell2.textContent = `${time} seconds`;
      row.appendChild(cell1);
      row.appendChild(cell2);
      document.getElementById('your-table-id').appendChild(row);
    });

    const totalTime = results.reduce((acc, { time }) => acc + time, 0);
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');
    totalCell1.textContent = 'Total';
    totalCell2.textContent = `${totalTime.toFixed(3)} seconds`;
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    document.getElementById('your-table-id').appendChild(totalRow);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
