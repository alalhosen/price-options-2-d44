import { LineChart as LChart, Line, XAxis,YAxis } from "recharts";

const LineChart = () => {
  const studentMarksData = [
    { id: 1, name: "Amina", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Rahim", math: 85, physics: 80, chemistry: 88 },
    { id: 3, name: "Karim", math: 67, physics: 72, chemistry: 70 },
    { id: 4, name: "Sadia", math: 92, physics: 89, chemistry: 94 },
    { id: 5, name: "Hasan", math: 74, physics: 69, chemistry: 73 },
    { id: 6, name: "Nusrat", math: 88, physics: 91, chemistry: 85 },
    { id: 7, name: "Fahim", math: 81, physics: 77, chemistry: 80 },
    { id: 8, name: "Rifat", math: 69, physics: 70, chemistry: 68 },
    { id: 9, name: "Lamia", math: 95, physics: 93, chemistry: 97 },
    { id: 10, name: "Imran", math: 76, physics: 74, chemistry: 79 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
