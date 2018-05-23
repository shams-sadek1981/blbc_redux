import React, { Component } from 'react';

import { List } from './List'


class TodoList extends Component {

    state = {
        data: [
            'Merocef',
            'Mishu',
            'SK'
        ]
    }

    handleClick = (evt) => {
        console.log(evt)
    }

    render() {

        return (
            <div>
                <h3> List...</h3>

                <List
                    data={this.state.data}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default TodoList;