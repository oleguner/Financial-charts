export const polarChartColors = [
  ['rgb(63, 232, 171, 1)',
    'rgb(246, 137, 17, 1)',
    'rgb(251, 234, 196, 1)',
    'rgb(132, 83, 24, 1)',
    'rgb(32, 3, 191, 1)',
    'rgb(207, 192, 223, 1)',
    'rgb(6, 88, 103, 1)',
    'rgb(144, 4, 72, 1)',
    'rgb(154, 124, 255, 1)',
    'rgb(236, 74, 63, 1)',
    'rgb(86, 174, 246, 1)',
    'rgb(123, 210, 72, 1)',
    'rgb(221, 182, 127, 1)',
    'rgb(150, 104, 170, 1)',
    'rgb(185, 181, 181, 1)',
    'rgb(186, 133, 181, 1)',
    'rgb(195, 134, 92, 1)',
    'rgb(26, 182, 34, 1)',
    'rgb(161, 101, 254, 1)',
    'rgb(80, 28, 51, 1)',],
  ['rgb(245, 15, 68, 0.1)']
]

export const radarChartColors = [
  ['rgb(255, 205, 86, 1)'],
  ['rgb(245, 15, 68, 0.1)']
]

export const barChartColors = [
  ['rgb(19, 86, 15, 1)'],
  ['rgba(157, 240, 19, 0.1)']
]

export const lineChartColors = [
  ['rgba(20, 84, 186, 1)'],
  ['rgba(207, 24, 136, 0.1)']
]

export const chartOptions = {
  
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
    }
  },
  animation: {
    duration: 300,
    easing: 'linear',
    colors: '#000'
  }
}
