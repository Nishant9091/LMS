
var ctx = document.getElementById("myChart4").getContext('2d');
 new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: 'Employee',
			backgroundColor: "#caf270",
			data: [12, 59, 5, 56, 58,12, 59, 87, 45],
		}, {
			label: 'Engineer',
			backgroundColor: "#45c490",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23],
		}, {
			label: 'Government',
			backgroundColor: "#008d93",
			data: [12, 59, 5, 56, 58,12, 59, 65, 51],
		}, {
			label: 'Political parties',
			backgroundColor: "#2e5468",
			data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      x: {
        stacked: true,
		grid: {
			display: false, // Set to false to hide y-axis grid lines
		  },
      },
      y: {
        stacked: true,
		grid: {
			display: false, // Set to false to hide y-axis grid lines
		  },
      }
    },
	}
});


var ctx = document.getElementById("myChart").getContext('2d');
 new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: 'Employee',
			backgroundColor: "#caf270",
			data: [12, 59, 5, 56, 58,12, 59, 87, 45],
		}, {
			label: 'Engineer',
			backgroundColor: "#45c490",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23],
		}, {
			label: 'Government',
			backgroundColor: "#008d93",
			data: [12, 59, 5, 56, 58,12, 59, 65, 51],
		}, {
			label: 'Political parties',
			backgroundColor: "#2e5468",
			data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      x: {
        stacked: true,
		grid: {
			display: false, // Set to false to hide y-axis grid lines
		  },
       
      },
      y: {
        stacked: true,
		 grid: {
          display: false, // Set to false to hide y-axis grid lines
        },
      }
    },
	}
});

const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle"),
  // modeSwitch = document.querySelector(".toggle-switch"),
  // modeText = document.querySelector(".mode-text"),
  searchBtn = document.querySelector(".search-bar");
mainconttent = document.querySelector(".mainconttent");


// modeSwitch.addEventListener("click", () => {
// body.classList.toggle("dark");
//   document.querySelector(".mode-text").innertext=""

// if (body.classList.contains("dark")) {
// modeText.innerText = " Light Mode ";
// } else modeText.innerText = " Dark Mode ";
// });

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  mainconttent.classList.toggle("close1");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});



