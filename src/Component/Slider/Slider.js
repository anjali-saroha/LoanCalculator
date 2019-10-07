import React from "react";
import './Slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderValue: props.value
        }
    }

    onMouseDown = (e) => {
    }

    onMouseUp = (e) => {
        let state = this.state
        if (this.props.onChange) {
            this.props.onChange(state.sliderValue)
        }
    }

    onChange = (e) => {
        let value = e.target.value
        this.setState(state => {
            return {sliderValue: value}
        })
    }

    render() {
        let props = this.props
        return (
            <div className="slidecontainer">
                <label>{props.name}</label><br></br>
                <input type="range"
                       onMouseDown={this.onMouseDown}
                       onMouseUp={this.onMouseUp}
                       min={props.min}
                       max={props.max} className="slider"
                       value={this.state.sliderValue}
                       onChange={this.onChange}
                />
            </div>
        )
    }
};

export default Slider;