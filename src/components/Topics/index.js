import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeDispatchMapper } from 'redux-boilerplate';

import { addTopics } from '../../actions/topicsActions'

//-- List component
import { TopicsList } from './TopicsList'
import { getMethod } from '../../api/apiMethods'

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class Topics extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.

        // getMethod('/api/accounts/ledger/all')
        //     .then( doc => {
        //         console.log(doc)
        //     })


        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
                this.props.addTopics(values)

                console.log('Received values of form: ', values);
                
            }
        });
    }

    render() {

        const { getFieldDecorator, getFieldsError } = this.props.form;

        return (
            <div>
                <h3>Topics...</h3>

                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('topicName', {
                            rules: [{ required: true, message: 'Please input your topic name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="TopicName" />
                        )}
                    </FormItem>
                    
                    <FormItem>
                        {getFieldDecorator('des')(
                            <Input placeholder="Description" />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            Submit
                        </Button>
                    </FormItem>
                </Form>


                <TopicsList { ...this.props }/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topicsReducer
    }
}

const mapDispatchToProps = makeDispatchMapper({
    addTopics
});


export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Topics));