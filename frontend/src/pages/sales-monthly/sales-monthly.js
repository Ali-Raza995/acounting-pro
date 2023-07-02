import React from 'react'
import LayoutApp from '../../components/Layout'
import { Card } from 'antd'

const SalesMonthly = () => {
  return (
    <LayoutApp>
    <div>
     <h1 style={{fontSize:'24px'}}>Sales Monthly</h1>
    </div>
    <div>
        <Card style={{fontSize:'20px'}}>
            <div style={{display:'flex', display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <div>
                    <span> Date: </span> <span style={{color:'red'}}> 12/10/2023 </span>
                </div>
                <div>
                <span> Total Number of Invoices: </span> <span style={{color:'red'}}> 64 </span>
                </div>
                <div>
                <span> Total Amount: </span> <span style={{color:'red'}}> $ 7000 </span>
                </div>
            </div>
        </Card>
    </div>
    </LayoutApp>
  )
}

export default SalesMonthly
