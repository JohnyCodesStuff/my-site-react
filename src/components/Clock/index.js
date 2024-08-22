/*import React from "react";
import './style.css';

class Clock extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            clicked: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.changeTime(), 1000);           
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.clicked !== this.state.clicked) {
            console.log('Huraaa!')
        }
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeTime = () => {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return <div className="clock">
            {this.state.date.toLocaleTimeString()}
            <button onClick={() => this.setState({ clicked: true})}> Zmień </button>
        </div>;
    }
}

export default Clock;


*/

import React, { useEffect, useState } from "react";
import './style.css'

const Clock = () => {

    const [date, setDate] = useState(new Date());
    const [clicked, setClicked] = useState(false);

    const changeTime = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(changeTime, 1000);

        return () => {
            clearInterval(timerID)
        }
    }, [])

    useEffect(() => {
        console.log('HURAAA!')   
    },[clicked])

    console.log(date);
    console.log(clicked);

    return (
        <div className="clock">
            {date.toLocaleTimeString()}
        </div>
    )
}

export default Clock
