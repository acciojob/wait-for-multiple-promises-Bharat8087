Promise.all(promises).then((times) => {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing table content

    let totalTime = 0;
    times.forEach((time, index) => {
        totalTime += time; // Add up all the times
        let row = document.createElement('tr');
        let promiseCell = document.createElement('td');
        let timeCell = document.createElement('td');

        promiseCell.textContent = 'Promise ' + (index + 1);
        timeCell.textContent = time.toFixed(3) + 's';

        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    });

    // Add row for total time
    let totalRow = document.createElement('tr');
    let totalCell = document.createElement('td');
    let totalTimeCell = document.createElement('td');

    totalCell.textContent = 'Total';
    totalTimeCell.textContent = totalTime.toFixed(3) + 's';

    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTimeCell);
    tableBody.appendChild(totalRow);
});