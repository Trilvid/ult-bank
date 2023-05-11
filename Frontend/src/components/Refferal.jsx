import React from 'react'

const Refferal = () => {
  return (
    <>
    <div className="space">
        <h1>my down line</h1>
    </div>
    <div className="contain">
    <div className="history">
            <table className="tables">
                <tr>
                    <th>name</th>
                    <th>profit</th>
                    <th>date</th>
                </tr>
                <tr>
                    <td>deposit</td>
                    <td>$3000</td>
                    <td>{Date.now().toString()}</td>
                </tr>
                <tr>
                    <td>deposit</td>
                    <td>$3000</td>
                    <td>{Date.now().toString()}</td>
                </tr>
            </table>
        </div>
    </div></>
  )
}

export default Refferal