import React, { useEffect, useState, useRef } from "react";
import LayoutApp from '../../components/Layout'
import { Card } from 'antd'
import mockData from '../sales-per-day/mock-data'
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import axios from "axios";


const SalesMonthly = () => {
  const dispatch = useDispatch();
  const [salesData, setSalesData] = useState([]);
  
  const getMonthlySales = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get('/api/sales/getbills');
      console.log('sales', data);
  
      // Group sales by month
      const groupedSales = data.reduce((result, sale) => {
        const month = dayjs(sale.createdAt).format('MMMM YYYY');
        if (!result[month]) {
          result[month] = [];
        }
        result[month].push(sale);
        return result;
      }, {});

  
          // Sort sales by month in reverse chronological order
          const sortedSales = Object.entries(groupedSales).sort(([aMonth, aSales], [bMonth, bSales]) => {
            const dateA = dayjs(aMonth, 'MMMM YYYY');
            const dateB = dayjs(bMonth, 'MMMM YYYY');
          
            // Compare the months first
            if (dateB.isAfter(dateA)) {
              return 1;
            } else if (dateA.isAfter(dateB)) {
              return -1;
            } else {
              // If the months are the same, compare the dates
              const sortedASales = aSales.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));
              const sortedBSales = bSales.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));
          
              const latestDateA = dayjs(sortedASales[0]?.createdAt);
              const latestDateB = dayjs(sortedBSales[0]?.createdAt);
          
              return latestDateB.diff(latestDateA);
            }
          });
          
          setSalesData(sortedSales.reduce((result, [month, sales]) => {
            result[month] = sales;
            return result;
          }, {}));          

      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(error);
    }
  };
  console.log('Monthlysales', salesData)

  useEffect(() => {
    getMonthlySales();
  }, []);
  
  return (
    <LayoutApp>
    <div>
     <h1 style={{fontSize:'24px'}}>Sales Monthly</h1>
    </div>
    {Object.entries(salesData).map(([month, sales]) => (
  <div key={month}>
    <h2>{month}</h2>
    {sales.map((data) => (
      <Card style={{ fontSize: '20px', marginTop:"20px" }}>
        <div style={{ display: 'flex', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <span> Date: </span> <span style={{ color: 'red' }}>{dayjs(data?.createdAt).format('DD-MM-YYYY')}</span>
          </div>
          <div>
            <span> Customer Name: </span> <span style={{ color: 'red' }}>{data?.customerName}</span>
          </div>
          <div>
            <span> Total Amount: </span> <span style={{ color: 'red' }}> $ {data?.totalAmount}</span>
          </div>
        </div>
      </Card>
    ))}
  </div>
))}

    </LayoutApp>
  )
}

export default SalesMonthly
