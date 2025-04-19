import { useState } from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, Legend, Brush  } from "recharts";

const data = [
    { month: "Jan", sales: 4000, expenses: 2400 },
    { month: "Feb", sales: 3000, expenses: 1398 },
    { month: "Mar", sales: 2000, expenses: 9800 },
    { month: "Apr", sales: 2780, expenses: 3908 },
    { month: "May", sales: 1890, expenses: 4800 },
    { month: "Jun", sales: 2390, expenses: 3800 },
    { month: "Jul", sales: 3490, expenses: 4300 },
  ];

export function BarChartComponent() {
    return(
        <div className="rounded-2xl shadow-md p-4 bg-white">
            <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
                <CartesianGrid/>
                <XAxis dataKey={'month'}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey={'sales'} fill="#8884d8"/>
                <Bar dataKey={'expenses'} fill="#82ca9d"/>
                <Brush/>
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export function FilteredBarChart() {
    const [filter, setFilter] = useState("sales");

    return(
        <>
        <div className="rounded-2xl shadow-md p-4 bg-white">
            <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
                <CartesianGrid/>
                <XAxis dataKey={'month'}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey={filter} fill="#8884d8"/>
                <Brush/>
            </BarChart>
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
    )
}