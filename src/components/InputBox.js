import React from 'react';
import {connect} from 'react-redux';
import updateMyInput from '../js/actions';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.props.updateMyInput('My Input');
        this.state = {
            myInput: 'My Input'
        }
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(ev) {
        console.log(this.props.myInput);
        this.setState({
            myInput: ev.target.value
        });
        this.props.updateMyInput(ev.target.value);
    }
    render(){
        return (
            <div className="input-box content">
                <input type="text" value={this.state.myInput} onChange={this.inputHandler} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    myInput: state.mirrorReducer.myInput
})

const mapDispatchToProps = dispatch => ({
    updateMyInput: myInput => dispatch(updateMyInput(myInput))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputBox);