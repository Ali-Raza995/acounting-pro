import React from 'react'
import LayoutApp from '../../components/Layout'
import { Card } from 'antd'
import mockData from '../sales-per-day/mock-data'

const SalesMonthly = () => {
  return (
    <LayoutApp>
    <div>
     <h1 style={{fontSize:'24px'}}>Sales Monthly</h1>
    </div>
    <div>
    {mockData?.map((data) => (
        <Card style={{fontSize:'20px'}}>
            <div style={{display:'flex', display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <div>
                    <span> Date: </span> <span style={{color:'red'}}> {data?.date} </span>
                </div>
                <div>
                <span> Total Number of Invoices: </span> <span style={{color:'red'}}> {data?.totalInvoices} </span>
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

export default SalesMonthly
