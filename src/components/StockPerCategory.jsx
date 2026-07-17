import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { useProducts } from "../hooks/useProducts";
import { getStockPerCategory } from "../utils/stockPerCategory";

const COLORS = [
  "#26a69a",
  "#ab47bc",
  "#5c6bc0",
  "#66bb6a",
  "#ffa726",
  "#ec407a",
  "#7e57c2",
  "#26c6da",
  "#d4e157",
  "#8d6e63",
];

const stockPerCategory = () => {
  const { data: stock = [] } = useProducts();
  const chartData = getStockPerCategory(stock);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="stock"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell key={entry.category} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default stockPerCategory;
