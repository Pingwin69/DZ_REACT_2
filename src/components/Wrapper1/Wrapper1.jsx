import React from 'react';
import "./Wrapper1.scss";


import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput';
import Buttons from '../Buttons/Buttons';
import TaskInput from '../TaskInput/TaskInput';
import AddBtn from '../AddBtn/AddBtn';
import Progress from '../Progress/Progress';




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