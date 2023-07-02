import React from 'react'
import LayoutApp from '../../components/Layout'
import { Card } from 'antd'
import mockData from './mock-data'

const SalesPerDay = () => {
  return (
    <LayoutApp>
    <div>
     <h1 style={{fontSize:'24px'}}>Sales Per Day</h1>
    </div>
    <div>
      {mockData?.map((data) => (
          <Card style={{fontSize:'20px'}}>
          <div style={{display:'flex', display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
              <div>
                  <span> Date: </span> <span style={{color:'red'}}> {data?.date} </span>
              </div>
              <div>
              <span> Customer Name: </span> <span style={{color:'red'}}> {data?.customerName} </span>
              </div>
              <div>
              <span> Total Amount: </span> <span style={{color:'red'}}> $ {data?.totalAmount} </span>
              </div>
          </div>
      </Card>

      ))}
      
    </div>
    </LayoutApp>
  )
}

export default SalesPerDay
