import { makeActionCreator } from 'redux-boilerplate';

export const addNewLedger = makeActionCreator("ADD_NEW_LEDGER", "obj")
export const setAllLedger = makeActionCreator("SET_ALL_LEDGER", "obj")