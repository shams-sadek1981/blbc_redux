import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeDispatchMapper } from 'redux-boilerplate';

import { setAge, setName, addName } from '../../actions/userActions'

class User extends Component {
    render() {
        return (
            <div>
                <h3>User Component.</h3>    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}

const mapDispatchToProps = makeDispatchMapper({
  setAge,
  setName,
  addName
});



export default connect(mapStateToProps, mapDispatchToProps)(User);