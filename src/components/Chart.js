import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = () => {
  let lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Value Overtime',
        data: [5000, 6000, 6500, 7000, 8000, 9500, 11000, 13000, 15000, 18000],
        backgroundColor: [
            'rgba(251, 133, 0, 0.4)'
        ],
        borderColor: [
            'rgba(251, 133, 0, 1)',
        ],
        borderWidth: 0
    }]
};

  return (
    <div>
      <Line data={lineChartData} />
    </div>
  )
}

export default Chart
