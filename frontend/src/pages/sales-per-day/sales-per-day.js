import React, { useEffect, useState, useRef } from "react";
import LayoutApp from "../../components/Layout";
import { Card } from "antd";
import axios from "axios";
import mockData from "./mock-data";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";

const SalesPerDay = () => {
  const dispatch = useDispatch();
  const [salesData, setSalesData] = useState([]);

  const getPerDaySales = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get("/api/sales/getbills");
      console.log("sales", data);
          // Sort sales data by createdAt date in descending order
     const sortedSalesData = data.sort((a, b) => {
      const dateA = dayjs(a.createdAt);
      const dateB = dayjs(b.createdAt);
      return dateB - dateA;
    });

    setSalesData(sortedSalesData);
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(error);
    }
  };
  console.log("sales", salesData);

  useEffect(() => {
    getPerDaySales();
  }, []);

  return (
    <LayoutApp>
      <div>
        <h1 style={{ fontSize: "24px" }}>Sales Per Day</h1>
      </div>
      <div>
    
        {   salesData ?
        salesData
          ?.filter((data) => dayjs(data?.createdAt).isSame(dayjs(), "day"))
          .map((data) => (
            <Card style={{ fontSize: "20px" }}>
              <div
                style={{
                  display: "flex",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                <div>
                  <span> Date: </span>{" "}
                  <span style={{ color: "red" }}>
                    {dayjs(data?.createdAt).format("DD-MM-YYYY")}
                  </span>
                </div>
                <div>
                  <span> Customer Name: </span>{" "}
                  <span style={{ color: "red" }}>{data?.customerName}</span>
                </div>
                <div>
                  <span> Total Amount: </span>{" "}
                  <span style={{ color: "red" }}> $ {data?.totalAmount}</span>
                </div>
              </div>
            </Card>
          )) : "No Sales of today"}
      </div>
    </LayoutApp>
  );
};

export default SalesPerDay;
