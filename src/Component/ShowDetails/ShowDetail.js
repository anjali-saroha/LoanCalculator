import React from "react";
import '../../App.css';
import CircularProgress from '@material-ui/core/CircularProgress'

const showDetail = (props) => {
    return (
        <div>
            {props.showProgress ?
                <CircularProgress style={{color: "#121212", height: 30, width: 30}}/> : (
                    <div className="card" style={{padding: 20, fontSize: 25,}}>
                        <i>Principal Amount</i> : {props.detail.amount}<br/>
                        <i>Duration for Loan(Months) </i>: {props.detail.month}<br/>
                        <i>Monthly amount Payable</i> : {props.detail.monthlyAmount}<br/>
                        <i>Interest to be paid(per Month)</i> : {props.detail.interest}<br/>
                    </div>)}
        </div>

    )
}

export default showDetail;