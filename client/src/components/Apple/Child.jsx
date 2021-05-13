import React from 'react';
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import './Apple.css';

import { connect } from 'react-redux';

function Child(props) {
  const { id } = useParams();

  const companies = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'];
  const companiesFullName = [
    'Apple', 'Alphabet', 'MSFT', 'Amazon', 'Facebook', 'Tesla'
  ];

  const companyIndex = companies.indexOf(id);
  const companyName = companiesFullName[companyIndex];

  const chartSettings = {
    labels: ['50 s.a.', '45 s.a.', '40 s.a.', '35 s.a.','30 s.a.',
      '25 s.a.', '20 s.a.', '15 s.a.', '10 s.a.', '5 s.a.', 'now'],
    datasets: [{
      label: `${companyName} change ratio`,
      data: props[companyIndex]['change'],
      backgroundColor: [
        'rgba(15, 44, 196, 0.2)',
        'rgba(184, 97, 99, 0.2)',
        'rgba(13, 133, 121, 0.2)',
      ],
      borderColor: [
        'rgba(253, 99, 153, 1)',
      ],
      borderWidth: 1
    }]
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
