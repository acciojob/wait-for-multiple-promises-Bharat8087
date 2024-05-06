//your JS code here. If required.
function getRandomDelay() {
    return Math.floor(Math.random() * 2000) + 1000;
}

function createPromise(id) {
    return new Promise(resolve => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve({ id, time: delay / 1000 });
        }, delay);
    });
}

const promises = [
    createPromise('Promise 1'),
    createPromise('Promise 2'),
    createPromise('Promise 3')
];

const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2');
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('tableBody').appendChild(loadingRow);

Promise.all(promises)
    .then(results => {
        document.getElementById('tableBody').removeChild(loadingRow);

        results.forEach(result => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const timeCell = document.createElement('td');
            idCell.textContent = result.id;
            timeCell.textContent = result.time.toFixed(3);
            row.appendChild(idCell);
            row.appendChild(timeCell);
            document.getElementById('tableBody').appendChild(row);
        });

        const totalTime = results.reduce((acc, cur) => acc + cur.time, 0);
        const totalRow = document.createElement('tr');
        const totalIdCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');
        totalIdCell.textContent = 'Total';
        totalTimeCell.textContent = totalTime.toFixed(3);
        totalRow.appendChild(totalIdCell);
        totalRow.appendChild(totalTimeCell);
        document.getElementById('tableBody').appendChild(totalRow);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
