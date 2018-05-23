import { makeActionCreator } from 'redux-boilerplate';

export const setName = makeActionCreator("SET_NAME", 'name');

export const setAge = makeActionCreator("SET_AGE", 'age');

export const addName = makeActionCreator("ADD_NAME", "name")