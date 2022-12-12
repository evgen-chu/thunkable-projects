import React from 'react';
import {Button, Image, Typography} from "antd";
import ThunkableBeaver from "../../assets/ThunkableBeaver.png";
import {ProjectType} from "../../types/types";
import './Header.css';

type HeaderPropsType = {
    projects: ProjectType[];
    addNewProject: () => void;
}

export const Header = (props: HeaderPropsType) => {
    const { projects, addNewProject} = props;
    const borderStyle = projects.length>0 ? { borderBottom: '2px solid #979797'}: {};

    return (
        <div className="header" style={borderStyle}>
            <div className="logo-container">
                <Image height={32} width={32} src={ThunkableBeaver} className="beaver-logo" alt="beaver_logo" />
                <Typography.Text className="title">MY PROJECTS</Typography.Text>
            </div>
            <div className="btn-container">
                <Button type="primary" shape="circle" className="add-btn" onClick={addNewProject} >
                    +
                </Button>
            </div>
        </div>
    )
}