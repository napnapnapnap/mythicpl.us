Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["2", "3", "4", "5", "6", "7", "8","9", "10", "11", "12", "13", "14", "15","16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26","27", "28", "29", "30"],
		datasets: [{
			label: 'HP & Damage multiplier (+10% per level)',
            backgroundColor: 'rgba(255, 152, 0, .9)',
            borderColor: 'rgba(213, 0, 0, .7)',
			borderWidth: 3,
			fill: false,
			steppedLine: false,
			pointRadius: 4,
			pointHitRadius: 12,
			// pointBorderColor: 'rgba(213, 0, 0, 1)',
			// pointBackgroundColor: 'rgba(255, 152, 0, .7)',
			borderJoinStyle: 'round',
			data: [1.1, 1.21, 1.34, 1.47, 1.62, 1.78, 1.95, 2.15, 2.36, 2.60, 2.86, 3.14, 3.46, 3.80, 4.18, 4.60, 5.06, 5.56, 6.12, 6.73, 7.41, 8.15, 8.96, 9.85, 10.83, 11.92, 13.11, 14.42, 15.86]
		}]
	},
	options: {
		tooltips: {
			mode: 'index',
		}
	}
});

//No longer in use
/*
Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('loot');
var chart = new Chart(ctx, {
	type: 'horizontalBar',
	yAxisID: "Keystone Level",
	data: {
		labels: ["24", "21", "18", "15", "12"],
		datasets: [{
			label: 'Pieces of loot',
			backgroundColor: 'rgba(76, 175, 80, 1)',
			borderColor: 'rgba(76, 175, 80, 1)',
			beginAtZero: true,
			data: [6, 5, 4, 3, 3, 0],
		}]
	},
	options: {
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Keystone level',
				}
			}]
		}
	}
});
*/