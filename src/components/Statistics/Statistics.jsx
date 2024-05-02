import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const assignmentData = [
  { name: 'Assignment 1', value: 48 },
  { name: 'Assignment 2', value: 54 },
  { name: 'Assignment 3', value: 44 },
  { name: 'Assignment 4', value: 60 },
  { name: 'Assignment 5', value: 28 },
  { name: 'Assignment 6', value: 20 },
  { name: 'Assignment 7', value: 30 },
  { name: 'Assignment 8', value: 28 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919', '#19FF39', '#19EFFF'];

const Statistics = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgba(152, 115, 255, 0.2)" }}
      >
        <h1 className="mt-5 pt-5 mb-5 pb-5">Assignment Distribution</h1>
      </div>
      <div className='d-flex justify-content-center'>
      <PieChart width={800} height={400}>
        <Pie
          data={assignmentData}
          cx={400}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {assignmentData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
