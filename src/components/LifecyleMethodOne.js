import React, {Component} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

/*
    Apa itu lifecycle method pada react ?, berikut adalah penjelasan dan perbedaannya:

    componentWillMount: dimana data akan dikirim sebelum component itu diberikan ke DOM

    componentDidMount: dimana data akan dikirim setelah component itu diberikan ke DOM

    componentWillRecieveProps: dimana data akan dikirim jika mengalami perubahan pada state

    shouldComponentUpdate: dimana data akan dikirim jika data tersebut bernilai true dan jika false maka data tidak akan dikirim

    componentWillUpdate: dimana data akan dikirim sebelum pembaruan component itu terjadi

    componentDidUpdate: dimana data akan dikirim setelah pembaruan component itu terjadi
 */

class LifecyleMethod extends Component {

    constructor(props) {

        super(props);
        this.state = {
            date: new Date(),
            color: false
        }
    }

    componentDidMount() {

        this.timer = setInterval(() => this.tick(), 1000);
        this.color = setInterval(() => this.changeColor(), 5000);
    }

    componentWillMount() {

        const name = prompt('masukan nama anda ?', '');
         if(typeof name === 'string') {
             alert('oke mari kita mulai');
         }
    }

    shouldComponentUpdate (newProps, newState) {

        // ubah nilai menjadi false dan lihat apa yang terjadi pada setiap component
        return true;
    }

    componentWillUpdate() {

        if(this.state.color) {
            const domNode = document.getElementById('testing1');
            domNode.style.color = 'red';
        }else {
            const domNode = document.getElementById('testing1');
            domNode.style.color = 'green';
        }
    }

    componentDidUpdate() {

        if(this.state.color) {
            const domNode = document.getElementById('testing2');
            domNode.style.color = 'blue';
        }else {
            const domNode = document.getElementById('testing2');
            domNode.style.color = 'purple';
        }
    }

    componentWillUnmount() {

        clearInterval(this.timer);
        clearInterval(this.color);
    }

    tick() {

        this.setState({
            date: new Date()
        });
    }

    changeColor() {

        this.setState({
            color: !this.state.color
        });
    }

    render() {
        return (
            <div>
                <Container className={'mt-5 position-relative'}>
                    <Row className='mx-auto justify-content-center'>
                        <Col md={6}>
                            <Card>
                            <Card.Header>
                                <Card.Title className='text-center'><h1 className='text-primary'>{'Lifecycle Methods'}</h1></Card.Title>
                                <Card.Title className='text-center'><h1>{'Tick App'}</h1></Card.Title>
                            </Card.Header>
                            <Card.Body className='m-3 p-3'>
                                <Button className='float-right' variant={'primary'} onClick={this.props.toggleStart}>{'Stop Time'}</Button>
                                <Card.Title id='testing1'><p>Date:</p><h2>{this.state.date.toDateString()}</h2></Card.Title>
                                <Card.Subtitle id='testing2'><p>Clock:</p><h3>{this.state.date.toLocaleTimeString()}</h3></Card.Subtitle>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

class LifecyleMethodOne extends Component{

    constructor(props) {

      super(props);
      this.state = {
        date: new Date(),
         toggle: null
      }

    }

    toggleStart() {

        this.setState({
            toggle: (!this.state.toggle) ? true : false
        });
    }

  render() {

        return (this.state.toggle ?
            <div>
                <LifecyleMethod toggleStart={this.toggleStart.bind(this)}/>
            </div>
            :
            <div>
                <Container className={'mt-5 position-relative'}>
                    <Row className='mx-auto justify-content-center'>
                        <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title className='text-center'><h1 className='text-danger'>{'Lifecycle Methods'}</h1></Card.Title>
                                <Card.Title className='text-center'><h1>{'Tick App'}</h1></Card.Title>
                            </Card.Header>
                            <Card.Body className='m-3 p-3'>
                                <Button className='float-right' variant={'primary'} onClick={this.toggleStart.bind(this)}>{'Start Time'}</Button>
                                <Card.Title id='testing1'><p>Date:</p><h2>{this.state.date.toDateString()}</h2></Card.Title>
                                <Card.Subtitle id='testing2'><p>Clock:</p><h3>{this.state.date.toLocaleTimeString()}</h3></Card.Subtitle>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LifecyleMethodOne;