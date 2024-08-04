import React from 'react';

class ArticleBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
         
    }
    addCounter = () => {
        this.setState({
            counter: 1
        })
    }
    render() {
        return <div>
            <h1>{this.props.title || '-'}</h1>
            <p>{this.props.description || 'Brak opisu'}</p>
            <p>{this.state.counter} </p>
            <button onClick={this.addCounter}>Dodaj</button>
            </div>
    }
}

export default ArticleBox;