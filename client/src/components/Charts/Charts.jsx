import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Line, Bar, Radar, PolarArea } from 'react-chartjs-2';
import './Charts.css';

import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';

import { utcDate } from '../../state/initialState';

import {
  polarChartColors, radarChartColors, barChartColors, lineChartColors
} from './chartsSettings';

function Child(props) {
  const { id } = useParams();
  const [chartType, setChartType] = useState('Line');
  const [quotes, setQuotes] = useState('price');
  const [chartColors, setChartColors] = useState(lineChartColors);

  const companies = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'];
  const companiesFullName = [
    'Apple', 'Alphabet', 'MSFT', 'Amazon', 'Facebook', 'Tesla'
  ];

  const companyIndex = companies.indexOf(id);
  const companyName = companiesFullName[companyIndex];

  const now = utcDate().toString();

  const chartData = props[companyIndex][quotes];
  const chartTimeLine = props[companyIndex]['last_trade_time']
    .map(date => {
      const seconds = ((Date.parse(now) - Date.parse(date)) / 1000);

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
      label: `${companyName} ${quotes}`,
      data: chartData,
      backgroundColor: chartColors[1],
      borderColor: chartColors[0],
      borderWidth: 3,
      radius: 0,
      borderJoinStyle: "round",
      lineTension: 0.4,
    }],
    options: {
      aimation: {
        duration: 2000,
        easing: 'easeInOutQuint'
      }
    }
  };

  useEffect(() => {
    switch (chartType) {
      case 'PolarArea': setChartColors(polarChartColors); break;
      case 'Bar': setChartColors(barChartColors); break;
      case 'Radar': setChartColors(radarChartColors); break;
      default: setChartColors(lineChartColors);
    }
  }, [chartType]);

  const handleClick = (clickEvent) => {
    const name = clickEvent.target.name;
    console.log(name);
    if (name === 'Line'
      || name === 'Bar'
      || name === 'Radar'
      || name === 'PolarArea') {
      setChartType(name);
    }
    if (name === 'price'
      || name === 'change'
      || name === 'change_percent'
      || name === 'dividend'
      || name === 'yield') {
      setQuotes(name);
    }
  }

  return (
    <div className="chart-wrapper">
      <div className="button-wrapper">

        <div className="chart-type">
          <h4 className="chart-type-header">Set the chart type</h4>
          <ButtonGroup className="mb-2" onClick={handleClick}>
            <Button
              variant={chartType === 'Line' ? "primary"
                : "outline-primary"}
              name="Line"
            >
              Line
            </Button>
            <Button
              variant={chartType === 'Bar' ? "primary"
                : "outline-primary"}
              name="Bar"
            >
              Bar
            </Button>
            <Button
              variant={chartType === 'Radar' ? "primary"
                : "outline-primary"}
              name="Radar"
            >
              Radar
            </Button>
            <Button
              variant={chartType === 'PolarArea' ? "primary"
                : "outline-primary"}
              name="PolarArea"
            >
              PolarArea
            </Button>
          </ButtonGroup>
        </div>
        <div className="chart-type">
          <h4 className="chart-type-header">Set the quotes</h4>
          <ButtonGroup className="mb-2" onClick={handleClick}>
            <Button
              variant={quotes === 'price' ? "primary"
                : "outline-primary"}
              name="price"
            >
              Price
            </Button>
            <Button
              variant={quotes === 'change' ? "primary"
                : "outline-primary"}
              name="change"
            >
              Change
            </Button>
            <Button
              variant={quotes === 'change_percent' ? "primary"
                : "outline-primary"}
              name="change_percent"
            >
              Change percent
            </Button>
            <Button
              variant={quotes === 'dividend' ? "primary"
                : "outline-primary"}
              name="dividend"
            >
              Dividend
            </Button>
            <Button
              variant={quotes === 'yield' ? "primary"
                : "outline-primary"}
              name="yield"
            >
              Yield
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="chart">
        {chartType === 'Line' &&
          <Line
            data={chartSettings}
            width={90}
            height={45}
            options={{ maintainAspectRatio: false }}
          />}
        {chartType === 'Bar' &&
          <Bar
            data={chartSettings}
            width={90}
            height={45}
            options={{ maintainAspectRatio: false }}
          />}
        {chartType === 'Radar' &&
          <Radar
            data={chartSettings}
            width={90}
            height={45}
            options={{ maintainAspectRatio: false }}
          />}
        {chartType === 'PolarArea' &&
          <PolarArea
            data={chartSettings}
            width={90}
            height={45}
            options={{ maintainAspectRatio: false }}
          />}
      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps, null)(Child);
