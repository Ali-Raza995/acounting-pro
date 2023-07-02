import React from 'react'
import LayoutApp from '../../components/Layout'
import { Card } from 'antd'

const SalesPerDay = () => {
  return (
    <LayoutApp>
    <div>
     <h1 style={{fontSize:'24px'}}>Sales Per Day</h1>
    </div>
    <div>
        <Card style={{fontSize:'20px'}}>
            <div style={{display:'flex', display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <div>
                    <span> Date: </span> <span style={{color:'red'}}> 12/10/2023 </span>
                </div>
                <div>
                <span> Customer Name: </span> <span style={{color:'red'}}> Ali Raza </span>
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

export default SalesPerDay
