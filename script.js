//your JS code here. If required.
function createPromise() {
    return new Promise((resolve, reject) => {
        let time = Math.random() * 2000 + 1000; 
        setTimeout(() => resolve(time / 1000), time); 
    });
}
let promises = [createPromise(), createPromise(), createPromise()];

Promise.all(promises).then((times) => {
});
Promise.all(promises).then((times) => {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing table content

    times.forEach((time, index) => {
        let row = document.createElement('tr');
        let promiseCell = document.createElement('td');
        let timeCell = document.createElement('td');

        promiseCell.textContent = 'Promise ' + (index + 1);
        timeCell.textContent = time.toFixed(3) + 's';

        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    });
});
