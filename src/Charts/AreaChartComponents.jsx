import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Brush,
} from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", sales: 4000, expenses: 2400 },
  { month: "Feb", sales: 3000, expenses: 1398 },
  { month: "Mar", sales: 2000, expenses: 9800 },
  { month: "Apr", sales: 2780, expenses: 3908 },
  { month: "May", sales: 1890, expenses: 4800 },
  { month: "Jun", sales: 2390, expenses: 3800 },
  { month: "Jul", sales: 3490, expenses: 4300 },
];

export function AreaChartComponent() {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid />
          <XAxis dataKey={"month"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            dataKey={"sales"}
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Area
            dataKey={"expenses"}
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Brush />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FilteredAreaChart() {
  const [filter, setFilter] = useState("sales");

  return (
    <>
      <div className="rounded-2xl shadow-md p-4 bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid />
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              dataKey={filter}
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Brush />
          </AreaChart>
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
