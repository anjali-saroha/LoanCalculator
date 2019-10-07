import React from "react";

const history = (props) => {
    const data = JSON.parse(localStorage.getItem('history'));
    return (data.map((item,i) => {
            return (
                <div key={i}>
                    <ul>
                        <li>Amount:{item.amount}<br/></li>
                        <li>Duration:{item.month}<br/></li>
                        <li>Interest:{item.interest}<br/></li>
                        <li>Monthly Data:{item.monthData}</li>
                    </ul>
                </div>

            )
        })
    )
}

export default history;