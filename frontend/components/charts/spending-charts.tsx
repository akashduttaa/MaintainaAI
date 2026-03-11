"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const COLORS = ["#6EE7FF", "#9B5CFF", "#22D3EE", "#34D399"];

export function CategoryPie({ data }: { data: { category: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="category" innerRadius={50} outerRadius={90}>
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function ForecastLine({ data }: { data: { month: string; spend: number; forecast: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
        <XAxis dataKey="month" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip />
        <Line type="monotone" dataKey="spend" stroke="#6EE7FF" strokeWidth={3} />
        <Line type="monotone" dataKey="forecast" stroke="#9B5CFF" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
