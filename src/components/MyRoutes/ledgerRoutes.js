import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";

import Ledger from '../Ledger/'

const CreateNewLedger = () => (
    <div>CreateNewLedger</div>
)
export const ledgerRoutes = () => (
    <Fragment>
        <Route path="/ledger" component={Ledger} />
        <Route path="/ledger/create-new-ledger" component={CreateNewLedger} />
    </Fragment>
)