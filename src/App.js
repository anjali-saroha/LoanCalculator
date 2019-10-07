import React, {Component} from 'react';
import Slider from "./Component/Slider/Slider";
import './App.css';
import Sidenav from "./Component/SideNav/Sidenav";
import axios from "axios";
import ShowDetail from "./Component/ShowDetails/ShowDetail";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Loan Calculator",
            minAmount: 500,
            maxAmount: 5000,
            minDuration: 6,
            maxDuration: 24,
            amount: 500,
            month: 6,
            interest: 0,
            monthlyAmount: 0,
            initialAmount: 500,
            initialDuration: 6,
            showProgress: false,
            history: []
        };
        this.showHideProgress = this.showHideProgress.bind(this);
    }

    showHideProgress(show) {
        this.setState({showProgress: show})
    }

    onFetch = () => {
        this.showHideProgress(true)
        let self = this
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.month}`).then(function (res) {
            self.showHideProgress(false)
            let monthData = res.data;
            self.setState({interest: monthData.interestRate, monthlyAmount: monthData.monthlyPayment.amount});
        })
        let singleHistory = this.state.history
        singleHistory.push({
            amount: this.state.amount,
            month: this.state.month,
            interest: this.state.interest,
            monthData: this.state.monthlyAmount
        });
        this.setState({
            history: singleHistory,
        });
        localStorage.setItem('history', JSON.stringify(this.state.history));
    }

    onChangeValueSlider = (value) => {
        this.setState({amount: value});
        this.onFetch();
    }

    onChangeMonthSlider = (value) => {
        this.setState({month: value});
        this.onFetch();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>{this.state.title}</h1>
                </div>
                <Sidenav></Sidenav>
                <div style={{justifycontent: "center", alignItems: "center", textAlign: "center",}}>
                    <Slider
                        name="Enter Loan Amount"
                        onChange={this.onChangeValueSlider}
                        min={this.state.minAmount}
                        max={this.state.maxAmount}
                        value={this.state.amount}
                    >
                    </Slider>
                    <Slider
                        name="Enter Loan Duration"
                        onChange={this.onChangeMonthSlider}
                        min={this.state.minDuration}
                        max={this.state.maxDuration}
                        value={this.state.month}
                    >
                    </Slider>
                    <ShowDetail
                        showProgress={this.state.showProgress}
                        detail={this.state}>
                    </ShowDetail>
                </div>
            </div>
        );
    }
}

export default App;
