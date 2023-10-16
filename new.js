/* Created by Tivotal */

let sideMenu = document.querySelectorAll(".nav-link");
sideMenu.forEach((item) => {
  let li = item.parentElement;

  item.addEventListener("click", () => {
    sideMenu.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let menuBar = document.querySelector(".menu-btn");
let sideBar = document.querySelector(".sidebar");
menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
});

let switchMode = document.getElementById("switch-mode");
switchMode.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

let searchFrom = document.querySelector(".content nav form");
let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector(".search-icon");
searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchFrom.classList.toggle("show");
    if (searchFrom.classList.contains("show")) {
      searchIcon.classList.replace("fa-search", "fa-times");
    } else {
      searchIcon.classList.replace("fa-times", "fa-search");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    searchIcon.classList.replace("fa-times", "fa-search");
    searchFrom.classList.remove("show");
  }
  if (window.innerWidth < 768) {
    sideBar.classList.add("hide");
  }
});

if (window.innerWidth < 768) {
  sideBar.classList.add("hide");
}

// //////////////////////////////////////////////////////
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec'],
      datasets: [{
        label: 'Monthly Sales',
        data: [12, 19, 3, 5, 2, 3, 12, 15, 8, 9, 13, 9],
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


































































// /////////////////////////////////////////////////////////////////////////////////////////////////

// const labels = Utils.months({ count: 7 });
// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//         ],
//         borderWidth: 1
//     }]
// };

// const config = {
//     type: 'bar',
//     data: data,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
// };

// var chart2 = new ApexCharts(document.querySelector(".chart-area2"), config);
// chart2.render();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////

// var options = {
//   series: [{
//   name: 'Series 1',
//   data: [80, 50, 30, 40, 100, 20],
// }, {
//   name: 'Series 2',
//   data: [20, 30, 40, 80, 20, 80],
// }, {
//   name: 'Series 3',
//   data: [44, 76, 78, 13, 43, 10],
// }],
//   chart: {
//   height: 350,
//   type: 'radar',
//   dropShadow: {
//     enabled: true,
//     blur: 1,
//     left: 1,
//     top: 1
//   }
// },
// title: {
//   text: 'Radar Chart - Multi Series'
// },
// stroke: {
//   width: 2
// },
// fill: {
//   opacity: 0.1
// },
// markers: {
//   size: 0
// },
// xaxis: {
//   categories: ['2011', '2012', '2013', '2014', '2015', '2016']
// }
// };

// var chart = new ApexCharts(document.querySelector(".chart-area"), options);
// chart.render();
