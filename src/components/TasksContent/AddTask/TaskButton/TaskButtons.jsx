import React from 'react';
import {AddTaskButtons} from "../../../Common/AddTaskButtons";
import {Link} from 'react-router-dom';

const TaskButtons = (props) => {

    return (<div>
            <div>
                <AddTaskButtons onClick={props.onNameSort} text={"Name sort"} />
            </div>
            <div>
                <AddTaskButtons onClick={props.onPrioritySort} text={"Priority Sort"} />
            </div>
           <Link to='/projects'> <div>
                <AddTaskButtons text={"To projects"} />
           </div> </Link>
        </div>
    );
};

export default TaskButtons;