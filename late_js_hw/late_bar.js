var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['violation of civil rights','police misconduct (use of force)', 'police misconduct (false arrest)', 'police misconduct (false imprisonment)', 'police misconduct (malicious proseution)', 'police misconduct (illegal search)', 'officer misconduct'],
        datasets: [{
            label: '',
            data: [20, 26, 22, 3, 6, 1, 3],
            backgroundColor: [
                '#ff0800'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP BY Country',
                font: {
                    size: 18
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
