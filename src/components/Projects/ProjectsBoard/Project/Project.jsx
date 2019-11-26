import React from 'react';
import style from './Project.module.css';
import {Link} from 'react-router-dom';

const Project = (props) => {
    return (
        <div className={style.item}>
            <div>
                <div className={style.title}>{props.name}</div>
                <div>
                    <Link to={'/tasks/' + props.id}>
                        <img className={style.folder}
                             src="https://cdn2.iconfinder.com/data/icons/file-and-folder-26/64/folder-document-archive-interface-512.png"
                             alt="folder"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;