import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

const mathMarksData = [
  { id: 1, name: "Amina", marks: 78 },
  { id: 2, name: "Rahim", marks: 85 },
  { id: 3, name: "Karim", marks: 67 },
  { id: 4, name: "Sadia", marks: 92 },
  { id: 5, name: "Hasan", marks: 74 },
  { id: 6, name: "Nusrat", marks: 88 },
  { id: 7, name: "Fahim", marks: 81 },
  { id: 8, name: "Rifat", marks: 69 },
  { id: 9, name: "Lamia", marks: 95 },
  { id: 10, name: "Imran", marks: 76 }
];


    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}></LChart>
            <Line dataKey="marks"></Line>
        </div>
    );
};

export default LineChart;