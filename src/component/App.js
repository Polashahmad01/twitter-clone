import React from 'react';

import './App.css';
import SideBar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';

const App = () => {
    return (
        <div className="app">
            {/* SideBar */}
            <SideBar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />
        </div>
    );
};

export default App;