function createPromise() {
    return new Promise((resolve, reject) => {
        let time = Math.random() * 2000 + 1000;
        setTimeout(() => resolve(time / 1000), time);
    });
}

let promises = [createPromise(), createPromise(), createPromise()];

const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2');
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('tableBody').appendChild(loadingRow);

Promise.all(promises)
    .then((times) => {
        document.getElementById('tableBody').removeChild(loadingRow);

        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        let totalTime = 0;
        times.forEach((time, index) => {
            totalTime += time;
            let row = document.createElement('tr');
            let promiseCell = document.createElement('td');
            let timeCell = document.createElement('td');

            promiseCell.textContent = 'Promise ' + (index + 1);
            timeCell.textContent = time.toFixed(3) + 's';

            row.appendChild(promiseCell);
            row.appendChild(timeCell);
            tableBody.appendChild(row);
        });

        let totalRow = document.createElement('tr');
        let totalCell = document.createElement('td');
        let totalTimeCell = document.createElement('td');

        totalCell.textContent = 'Total';
        totalTimeCell.textContent = totalTime.toFixed(3) + 's';

        totalRow.appendChild(totalCell);
        totalRow.appendChild(totalTimeCell);
        tableBody.appendChild(totalRow);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
