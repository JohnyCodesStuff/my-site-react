import React from 'react';

class ArticleBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            timer: 0,
            clearer: 0,
        };
         
    }
    addCounter = () => {
        this.setState((prevState, prevProps) => ({
            counter: prevState.counter + 1
        }))
    }
    addTimer = () => {
        this.setState((prevState, prevProps) => ({
            timer: prevState.timer + 100,
           
        }))
    }
    clearCounter = () => {
        this.setState((prevState, prevProps) => ({
            counter: prevState.counter = 0,
            timer: prevState.timer = 0,
        }))
    }
    render() {
        return <div>
            <h1>{this.props.title || '-'}</h1>
            <p>{this.props.description || 'Brak opisu'}</p>
            <p>{this.state.counter}  </p>
            <p>{this.state.timer}</p>
            <button onClick={this.addCounter}>Dodaj</button>
            <button onClick={this.addTimer}>Dodaj timer</button>
            <button onClick={this.clearCounter}>Wyzeruj</button>
            </div>
    }
}

export default ArticleBox;