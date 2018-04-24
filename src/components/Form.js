import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actCloseForm, actAddItem, actUnSelecItem} from './../actions/index';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_id: '',
            task_name: '',
            task_level: 0
        };

        this.handleCancelAdd = this.handleCancelAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentWillMount(){
        this.updateItem(this.props.itemSelected)
    }

    componentWillReceiveProps(nextProps){
        this.updateItem(nextProps.itemSelected)
    }

    updateItem(item){
        if(item !== null) {
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level,
            });
        }
    }

    handleChange(event) {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        let item = {
            name: this.state.task_name,
            id: this.state.task_id,
            level: this.state.task_level,
        };

        this.props.onClickSubmit(item);
        this.props.handleCancel();

        event.preventDefault();
    }

    handleCancelAdd(){   
        this.props.handleCancel();
    }

    render() {

        let {isShowForm} = this.props;

        if(!isShowForm) return null;
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">

                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <input value={this.state.task_name} onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                        </div>

                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <select value={this.state.task_level} onChange={this.handleChange}  name="task_level" className="form-control" required="required" >                
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancelAdd} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );   
    }
}

const mapStateToProps = state => {

    return {
        isShowForm: state.isShowForm,
        itemSelected: state.itemSelected
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {     
        handleCancel: () => {       
            dispatch(actCloseForm());
            dispatch(actUnSelecItem());
        },
        onClickSubmit: (item) => {       
            dispatch(actAddItem(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);