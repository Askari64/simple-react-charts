import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000, expenses: 2400 },
  { month: "Feb", sales: 3000, expenses: 1398 },
  { month: "Mar", sales: 2000, expenses: 9800 },
  { month: "Apr", sales: 2780, expenses: 3908 },
  { month: "May", sales: 1890, expenses: 4800 },
  { month: "Jun", sales: 2390, expenses: 3800 },
  { month: "Jul", sales: 3490, expenses: 4300 },
];

export function LineChartComponent() {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={"sales"}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey={"expenses"}
            stroke="#00ff00"
            activeDot={{ r: 8 }}
          />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FilteredLineChart() {
  const [filter, setFilter] = useState("sales");

  return (
    <>
      <div className="rounded-2xl shadow-md p-4 bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="linear"
              dataKey={filter}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <label className="text-md font-medium">Select Data:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 text-base border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="sales">Sales</option>
          <option value="expenses">Expenses</option>
        </select>
      </div>
    </>
  );
}
