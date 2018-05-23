import React, { Component } from 'react';

import { Button, Form, Input, Icon, Table } from 'antd';
const FormItem = Form.Item;

export const NewLedger = (props) => {

    const { getFieldDecorator } = props.form;
    
    return (
        <div>
            <Form layout="inline" onSubmit={props.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('ledgerName', {
                            rules: [{ required: true, message: 'Please input your ledger name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ledger Name" />
                        )}
                    </FormItem>
                    
                    <FormItem>
                        {getFieldDecorator('ledgerCode', {
                            rules: [{ required: true, message: 'Please input your ledger code!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ledger Code" />
                        )}
                    </FormItem>
                    
                    <FormItem>
                        {getFieldDecorator('particulars')(
                            <Input placeholder="Particulars" />
                        )}
                    </FormItem>
                   
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </FormItem>
                </Form>
        </div>
    );
}