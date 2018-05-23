import React, { Component } from 'react';
import { Table } from 'antd';

export const LedgerList = (props) => {

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'code',
            dataIndex: 'code',
            key: 'code',
        }
    ];


    return (
        <div>
            <h3>Ledger List</h3>

            <Table columns={columns} dataSource={props.ledger.list} rowKey="_id"/>
        </div>
    );
}