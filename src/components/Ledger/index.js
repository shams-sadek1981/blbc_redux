import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeDispatchMapper } from 'redux-boilerplate';
import { getMethod, postMethod } from '../../api/apiMethods'

import { Link } from "react-router-dom";

//-- actions
import { addNewLedger, setAllLedger } from '../../actions/ledgerActions'
import { LedgerList } from './LedgerList'
import { NewLedger } from './NewLedger'

import { Button, Row, Col, Tabs, Form, Input, Icon } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Ledger extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.

        getMethod('/accounts/ledger/all')
            .then(doc => {
                this.props.setAllLedger(doc)
            })
    }

    callback(key) {
        // console.log(key);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.addNewLedger(values)

                this.props.form.resetFields();
            }
        });
    }

    render() {

        const { getFieldDecorator, getFieldsError } = this.props.form;

        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Ledger List" key="1">
                        <LedgerList {...this.props} />
                    </TabPane>

                    <TabPane tab="Create New Ledger" key="2">
                        <NewLedger
                            { ...this.props}
                            handleSubmit={this.handleSubmit}
                        />
                    </TabPane>

                    <TabPane tab="Print" key="3">
                        Print
                    </TabPane>
                </Tabs>


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


export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Ledger));