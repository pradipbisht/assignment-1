const doughnut = document.getElementById('doughnut');

  new Chart(doughnut, {
    type: 'doughnut',
    data: {
      labels: ['Sales', 'Defect', 'Unsold'],
      datasets: [{
        label: '# of Votes',
        data: [5,2,3],
        backgroundColor:[
            'grey',
            'pink',
            'blue'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });