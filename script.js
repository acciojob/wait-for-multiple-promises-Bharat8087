 /*function createPromise(min, max) {
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

      const loadingRow = document.getElementById('loadingRow');

      Promise.all(promises)
        .then((results) => {
          loadingRow.parentNode.removeChild(loadingRow);

          results.forEach((time, index) => {
            const row = document.createElement('tr');
            const promiseCell = document.createElement('td');
            const timeCell = document.createElement('td');
            promiseCell.textContent = `Promise ${index + 1}`;
            timeCell.textContent = `${time} s`;
            row.appendChild(promiseCell);
            row.appendChild(timeCell);
            document.getElementById('output').appendChild(row);
          });

          const totalTime = results.reduce((acc, curr) => acc + curr, 0);
          const totalRow = document.createElement('tr');
          const totalCell = document.createElement('td');
          const totalTimeCell = document.createElement('td');
          totalCell.textContent = 'Total';
          totalTimeCell.textContent = `${totalTime.toFixed(3)} s`;
          totalRow.appendChild(totalCell);
          totalRow.appendChild(totalTimeCell);
          document.getElementById('output').appendChild(totalRow);
        })
        .catch((error) => {
          console.error('Error occurred:', error);
        });*/