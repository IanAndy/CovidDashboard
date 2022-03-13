var chart = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 50);
gradient.addColorStop(0, '#2e7ee599');
gradient.addColorStop(0.6, '#2e7ee599');
gradient.addColorStop(1, '#2e7ee50d');

const labels = [
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu',
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: gradient,
        borderColor: '#2C7BE5',
        data: [0, 10, 5, 10, 15, 22, 18, 12, 15, 25, 22, 27, 30, 35],
        tension: 0.4,
        pointRadius: 0,
        fill: true
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }
        }
    }
};

var chartInstance = new Chart(chart, config);


var chart1 = document.getElementById('chart1').getContext('2d'),
    gradient1 = chart1.createLinearGradient(0, 0, 0, 50);
gradient1.addColorStop(0, '#2e7ee599');
gradient1.addColorStop(0.6, '#2e7ee599');
gradient1.addColorStop(1, '#2e7ee50d');

const labels1 = [
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu',
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu'
];

const data1 = {
    labels: labels1,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: gradient1,
        borderColor: '#2C7BE5',
        data: [0, 10, 5, 10, 15, 22, 18, 12, 15, 25, 22, 27, 30, 35],
        tension: 0.4,
        pointRadius: 0,
        fill: true
    }]
};

const config1 = {
    type: 'line',
    data: data1,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }
        }
    }
};

var chartInstance1 = new Chart(chart1, config1);

var chart2 = document.getElementById('chart2').getContext('2d'),
    gradient2 = chart2.createLinearGradient(0, 0, 0, 50);
gradient2.addColorStop(0, '#2e7ee599');
gradient2.addColorStop(0.6, '#2e7ee599');
gradient2.addColorStop(1, '#2e7ee50d');

const labels2 = [
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu',
    'January',
    'February',
    'March',
    'drew',
    'baba',
    'winner',
    'bazu'
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: gradient2,
        borderColor: '#2C7BE5',
        data: [0, 10, 5, 10, 15, 22, 18, 12, 15, 25, 22, 27, 30, 35],
        tension: 0.4,
        pointRadius: 0,
        fill: true
    }]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }
        }
    }
};

var chartInstance2 = new Chart(chart2, config2);

var ctx = document.getElementById("casesChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
                label: "Positive",
                backgroundColor: "#D13F4A",
                borderRadius: 10,
                borderSkipped: false,
                data: [500, 300, 700, 400, 100, 250, 150, 600, 800, 550, 200, 800]
            },
            {
                label: "Negative",
                backgroundColor: "#D2DDEC",
                borderRadius: 10,
                borderSkipped: false,
                data: [1000, 600, 1900, 800, 300, 300, 350, 1200, 1600, 1100, 700, 2200]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        barRoundness: 1,
        barThickness: 16,
        maxBarThickness: 10,
        plugins: {
            legend: {
                display: false,
            },
            barPercentage: .8,
            categoryPercentage: 0.3,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: "#95AAC9"
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false
                },
                ticks: {
                    color: "#95AAC9"
                }
            }
        }
    }
});