import React from 'react'

const History = () => {
  return (
    <>
    <div className="space">
        <h1>my transactions</h1>
    </div>
    <div className="contain">
        <div className="history">
            <table className="tables">
                <tr>
                    <th>type</th>
                    <th>amount</th>
                    <th>date</th>
                    <th>time</th>
                    <th>action</th>
                </tr>
                <tr>
                    <td>deposit</td>
                    <td>$3000</td>
                    <td>{Date.now().toString()}</td>
                    <td>hello day</td>
                    <td><button className='del'>delete</button></td>
                </tr>
                <tr>
                    <td>deposit</td>
                    <td>$3000</td>
                    <td>{Date.now().toString()}</td>
                    <td>hello day</td>
                    <td><button className='del'>delete</button></td>
                </tr>
            </table>
        </div>
    </div>
    </>
  )
}

export default History