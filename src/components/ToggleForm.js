import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actToggleForm} from './../actions/index'

class ToggleForm extends Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }
    
    toggleForm() {
        this.props.handleToggle();
    }

    render() {
        const {isShowForm} = this.props;
        let taskName = (isShowForm === true) ? 'Close Form' : 'Open Form';
        let classButton = (isShowForm === true) ? 'btn-info' : 'btn-success';

        return(
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={this.toggleForm} type="button" className={`btn btn-block ${classButton}`}>{taskName}</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: () => {
            dispatch(actToggleForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);