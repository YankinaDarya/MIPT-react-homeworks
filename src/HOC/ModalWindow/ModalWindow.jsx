import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import style from './ModalWindow.module.css';
import AddButton from "../../components/Common/AddButton";

export const withModalWindow = (Component) => {
    let WrapperContainer = (props) => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        return (
            <div className={props.addWindow}>
                <div className={props.textStyle}>{props.buttonName}</div>
                <div onClick={handleOpen}><AddButton /></div>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <div className={style.paper}>
                        <Component {...props}/>
                    </div>
                </Modal>
            </div>
        );
    };
    return (WrapperContainer);
};