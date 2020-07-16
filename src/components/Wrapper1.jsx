import React from 'react';

import Header from './Header';
import SearchInput from './SearchInput';
import Buttons from './Buttons';
import TaskInput from './TaskInput';
import AddBtn from './AddBtn';
import Progress from './Progress';



function Wrapper1(){
    return(
        <div className="Wrapper1">
            <Header/>
            <SearchInput/>
            <Buttons/>
            <TaskInput/>
            <AddBtn/>
            <Progress/>
        </div>
    );
}

export default Wrapper1;