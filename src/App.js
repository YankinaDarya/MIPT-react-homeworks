import React from 'react';
import './App.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Content store={props.store}/>
        </div>
    );
};

export default App;