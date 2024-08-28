import React from "react";

const data = [
  { name: "Presale", value: 20, color: "#ff3131" },
  { name: "Liquidity", value: 30, color: "white" },
  { name: "CEX, launchpads, MM", value: 20, color: "black" },
  { name: "Initial Backers", value: 10, color: "#ff3131" },
  { name: "Marketing", value: 15, color: "white" },
  { name: "Community Rewards", value: 5, color: "black" },
];

const KillonomicsPieChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Oi&display=swap');
          .oi-font {
            font-family: "Kavoon", cursive;
          }
        `}
      </style>
      <h2 className="text-2xl font-bold text-center mb-4 oi-font text-[#990000]">
        Killonomics
      </h2>
      <svg viewBox="0 0 100 100" className="w-full h-auto">
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;
          const endAngle = startAngle + angle;
          const largeArcFlag = angle > 180 ? 1 : 0;
          const startX = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
          const startY = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
          const endX = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
          const endY = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

          const path = `M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

          startAngle += angle;

          return (
            <path
              key={index}
              d={path}
              fill={item.color}
              stroke="black"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 mr-2 border border-black"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="flex-grow text-black">{item.name}</span>
            <span className="font-semibold text-black">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KillonomicsPieChart;
