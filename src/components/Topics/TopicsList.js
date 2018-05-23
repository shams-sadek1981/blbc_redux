import React, { Component } from 'react';

import { Form, Icon, Input, Button, List } from 'antd';
const FormItem = Form.Item;


export const TopicsList = (props) => {

    return (
        <div>
            <h3>Topics...q</h3>

            <List
                header={<div>Topics List...</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={props.topics.list}
                renderItem={item => (<List.Item>{item.topicName}</List.Item>)}
            />
         
        </div>
    );
}

