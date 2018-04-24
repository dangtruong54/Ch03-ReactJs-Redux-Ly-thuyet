import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actOpenForm, actDeleteItem, actEditItem } from './../actions/index';

class Item extends Component {
    
    handleEdit(item) {
       this.props.handleOpenForm();
       this.props.handleEditItem(item);
    }

    handleDelete(id) {  
        this.props.handleDeleteItem(id);
        this.props.handleConfirmModal();
    }

    render() {
        const {item, index} = this.props; 

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button onClick={()=>this.handleEdit(item)}  type="button" className="btn btn-warning">Edit</button>
                {/* SHOW MODAL */}
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal">Delete</button>
                    {/* Modal */}
                    <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            {/* Modal content*/}
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title">Delete Item</h4>
                            </div>
                            <div className="modal-body">
                                <p>Do you want Delete Course?.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick = {() =>  this.handleDelete(item.id)} className="btn btn-primary" data-dismiss="modal">OK</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </td>
                {/* SHOW MODAL*/}

            </tr>
        );
    }

    showElementLevel(level){
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm,
        confirm: state.confirm
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleOpenForm: () => {    
            dispatch(actOpenForm())
        },
        handleDeleteItem: (id) => {
            dispatch(actDeleteItem(id));        
        },
        handleEditItem: (item) => {
            dispatch(actEditItem(item))         
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
