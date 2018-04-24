import React, { Component } from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';

class Control extends Component {

    render() {
        return (
            <div className="row">

                {/* SEARCH : START */}
                <Search/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}

                {/* ADD : START */}
                    <ToggleForm />
                {/* ADD : END */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

export default connect(mapStateToProps, null)(Control);
