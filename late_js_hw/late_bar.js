var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['violation of civil rights','police misconduct (use of force)', 'police misconduct (false arrest)', 'police misconduct (false imprisonment)', 'police misconduct (malicious proseution)', 'police misconduct (illegal search)', 'officer misconduct'],
        datasets: [{
            label: '',
            data: [20, 26, 22, 3, 6, 1, 3],
            backgroundColor: [
                '#92B9BD'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Police misconduct is by far the most common lawsuit against Baltimore Police 2015-2018',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'There were 82 court cases filed against Baltimore Police 2015-2018, according to data from FiveThirtyEight'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
