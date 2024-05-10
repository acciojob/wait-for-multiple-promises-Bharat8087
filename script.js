function getRandomDelay() {
            return Math.floor(Math.random() * 3000) + 1000;
        }

        function createPromise(index) {
            const delay = getRandomDelay();
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ index, timeTaken: delay / 1000 });
                }, delay);
            });
        }

        const promises = [];

        for (let i = 1; i <= 3; i++) {
            promises.push(createPromise(i));
        }

        document.addEventListener('DOMContentLoaded', () => {
            Promise.all(promises)
                .then(results => {
                    const loadingRow = document.getElementById('loadingRow');
                    loadingRow.parentNode.removeChild(loadingRow);

                    results.forEach(result => {
                        const row = document.createElement('tr');
                        const promiseCell = document.createElement('td');
                        promiseCell.textContent = `Promise ${result.index}`;
                        row.appendChild(promiseCell);
                        const timeCell = document.createElement('td');
                        timeCell.textContent = result.timeTaken.toFixed(3);
                        row.appendChild(timeCell);
                        document.querySelector('table').appendChild(row);
                    });

                    const totalTime = results.reduce((acc, curr) => acc + curr.timeTaken, 0);
                    const totalRow = document.createElement('tr');
                    const totalCell = document.createElement('td');
                    totalCell.textContent = 'Total';
                    totalRow.appendChild(totalCell);
                    const totalTimeCell = document.createElement('td');
                    totalTimeCell.textContent = totalTime.toFixed(3);
                    totalRow.appendChild(totalTimeCell);
                    document.querySelector('table').appendChild(totalRow);
                });
        });