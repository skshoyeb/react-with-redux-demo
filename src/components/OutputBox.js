import React from 'react';
import {connect} from 'react-redux';

class OutputBox extends React.Component {
    render(){
        let revInput = this.props.myInput ? this.props.myInput.split('').reverse().join('') : '';
        return (
            <div className="output-box content">
                {revInput}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    myInput: state.mirrorReducer.myInput
})
export default connect(
    mapStateToProps
)(OutputBox);