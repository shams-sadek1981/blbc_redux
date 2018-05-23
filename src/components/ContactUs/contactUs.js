import React, { Component } from 'react';

import { connect } from 'react-redux';
import { makeDispatchMapper } from 'redux-boilerplate';
import { getMethod, postMethod } from '../../api/apiMethods'

class ContactUs extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    ledger: state.ledgerReducer
})


const mapDispatchToProps = makeDispatchMapper({
    addNewLedger,
    setAllLedger
});


export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContactUs));