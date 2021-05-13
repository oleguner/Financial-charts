import React from 'react';
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import './Apple.css';

import { connect } from 'react-redux';

import { utcDate } from '../../state/initialState';

function Child(props) {
  const { id } = useParams();

  const companies = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'];
  const companiesFullName = [
    'Apple', 'Alphabet', 'MSFT', 'Amazon', 'Facebook', 'Tesla'
  ];

  const companyIndex = companies.indexOf(id);
  const companyName = companiesFullName[companyIndex];

  const now = utcDate().toString();

  let options = 'price';

  const chartData = props[companyIndex][options];
  const chartTimeLine = props[companyIndex]['last_trade_time']
    .map(date => {
      const seconds = ((Date.parse(now) - Date.parse(date)) / 1000);

      console.log(seconds)

      if (seconds === 0) return `now`;

      if (seconds >= 60) {
        const rest = Math.trunc(((seconds / 60) % 1) * 60)
        return `${(seconds / 60).toFixed(0)}m ${rest.toFixed(0)}s.a`;
      } else {
        return seconds + 's. a.';
      }
    });

  const chartSettings = {
    labels: chartTimeLine,
    datasets: [{
      fill: true,
      label: `${companyName} change ratio`,
      data: chartData,
      backgroundColor: [
        'rgba(200, 84, 186, 0.1)',
      ],
      borderColor: [
        'rgba(20, 84, 186, 1)',
      ],
      borderWidth: 3,
      radius: 0,
      borderDashOffset: "round",
    }],
  };

  return (
    <div className="apple-wrapper">
      <div className="chart">
        <Line
          data={chartSettings}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps, null)(Child);
