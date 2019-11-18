import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isInitialized: state.tasksReducer.initialized
});

export default connect(mapStateToProps, null)(Header);