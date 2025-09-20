import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getMainInfo } from "../api/mainInfoApi";

export default function Graph() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchChartData = async () => {
    setLoading(true);
    try {
      const result = await getMainInfo();
      // making proper dates
      if (result.data && Array.isArray(result.data)) {
        const newData = result.data.map((item) => ({
          date: new Date(item[0]).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          viaBooking: parseInt(item[1]),
          mainBooking: parseInt(item[2]),
          totalSeats: parseInt(item[3]),
        }));
        setChartData(newData);
      } else {
        throw new Error("Invalid API response structure");
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchChartData();
  }, []);

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 300,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: chartData.map((item) => item.date),
      labels: {
        style: {
          color: "#666",
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        style: {
          color: "#666",
          fontSize: "12px",
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Via Booking",
        data: chartData.map((item) => item.viaBooking),
        color: "#8b5cf6",
      },
      {
        name: "Main Booking",
        data: chartData.map((item) => item.mainBooking),
        color: "#a78bfa",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-sky-100 to-blue-300 p-4 rounded-lg md:p-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Bus Booking Analytics
          </h3>
          <p className="text-sm text-gray-600">
            Daily booking comparison - (Via vs Main route)
          </p>
        </div>

        {loading ? (
          <div className="h-72 flex items-center justify-center">
            <div className="text-gray-500">Loading chart data...</div>
          </div>
        ) : (
          <div className="h-72">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        )}

        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
            <span className="text-sm text-gray-600">Via Booking</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
            <span className="text-sm text-gray-600">Main Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}
