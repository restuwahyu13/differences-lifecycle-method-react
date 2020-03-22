import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class ReceiveProps extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        alert(this.props.data);
    }

    render(){
        return (
            <div><h1>{''}</h1></div>
        )
    }
}

class LifecyleMethodTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    nextCounter() {this.setState({counter: this.state.counter + 1})}
    resetCounter(){this.setState({counter: 0})}
    previousCounter() {this.setState({counter: this.state.counter - 1})}

    render() {
        return (
            <div>
                <ReceiveProps data={this.state.counter}/>
                <h1 className={'text-center mt-3 text-primary'}>{'Counter App'}</h1>
                <Container className="mt-5">
                    <Row>
                    <Col lg={4}>
                        <Button onClick={this.nextCounter.bind(this)} variant={'primary'} block>{'Next Counter'}</Button>
                    </Col>
                    <Col lg={4}>
                        <Button onClick={this.resetCounter.bind(this)} variant={'danger'} block>{'Reset Counter'}</Button>
                    </Col>
                    <Col lg={4}>
                        <Button onClick={this.previousCounter.bind(this)} variant={'primary'} block>{'previous Counter'}</Button>
                    </Col>
                    </Row>
                    <h4 className={'text-center mt-3'}>{`Counter Count: ${this.state.counter}`}</h4>
                </Container>
            </div>
        )
    }
}

export default LifecyleMethodTwo;