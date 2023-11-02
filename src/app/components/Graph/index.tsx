import { LineChart, Line } from "recharts"
const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 400,
    amt: 800,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const Chart = () => {
  return (
    <div>
      <div className="max-w-[700px]">
        <LineChart width={700} height={220} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#FF5403" dot={false} />
        </LineChart>
        <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="700" height="6" viewBox="0 0 771 6" fill="none">
  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM765.541 3C765.541 4.47276 766.735 5.66667 768.208 5.66667C769.68 5.66667 770.874 4.47276 770.874 3C770.874 1.52724 769.68 0.333333 768.208 0.333333C766.735 0.333333 765.541 1.52724 765.541 3ZM3 3.5L768.208 3.5V2.5L3 2.5V3.5Z" fill="#DBDEE6"/>
</svg>
      </div>
      <div className="flex justify-between text-[#56616B] text-sm font-medium">
        <p>Apr 1 , 2022</p>
        <p>Apr 30 , 2022</p>
      </div>
      </div>
      
    </div>
  )
}

export default Chart
