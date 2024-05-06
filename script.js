function createPromise() {
    return new Promise((resolve, reject) => {
        let time = Math.random() * 2000 + 1000;
        setTimeout(() => resolve(time / 1000), time);
    });
}

let promises = [createPromise(), createPromise(), createPromise()];

cy.get("tbody#tableBody").then(($tableBody) => {
    if ($tableBody) {
        const loadingRow = document.createElement('tr');
        const loadingCell = document.createElement('td');
        loadingCell.setAttribute('colspan', '2');
        loadingCell.textContent = 'Loading...';
        loadingRow.appendChild(loadingCell);
        $tableBody.append(loadingRow);

        Promise.all(promises)
            .then((times) => {
                loadingRow.remove();

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
                    $tableBody.append(row);
                });

                let totalRow = document.createElement('tr');
                let totalCell = document.createElement('td');
                let totalTimeCell = document.createElement('td');

                totalCell.textContent = 'Total';
                totalTimeCell.textContent = totalTime.toFixed(3) + 's';

                totalRow.appendChild(totalCell);
                totalRow.appendChild(totalTimeCell);
                $tableBody.append(totalRow);
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    } else {
        console.error('Table body does not exist.');
    }
});
