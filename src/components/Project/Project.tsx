import React from 'react';
import {Button, Image, Typography} from "antd";
import ProjectIcon from "../../assets/defaultProjectIcon_2x.png";
import EditIcon from "../../assets/EditIcon.svg";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import { ProjectType } from '../../types/types';
import './Project.css';

type ProjectPropsType = {
    project: ProjectType;
    index: number;
    editId: number;
    inputValue: string;
    setEdit: (id: number) => void;
    setInputValue: (value: string) => void;
    confirmDeleting: (project: ProjectType) => void;
    editProject: (project: ProjectType, value: string) => void;
}

export const Project = (props: ProjectPropsType) => {
    const {project, index, editId, inputValue, setEdit, setInputValue, confirmDeleting, editProject} = props;
    return (
        <div key={index} className="project-container">
            <div className="project-name-container">
                <Image height={32} width={32} src={ProjectIcon} className="project-img" alt="project_img"/>
                {editId === project.id ? (
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
                        className="project-input"
                    />
                ) : (
                    <div key={project.id} className="project-name">{project.name}</div>
                )}
            </div>
            {editId === project.id ? <Button className="edit-delete-btn" style={{}} onClick={() => editProject(project, inputValue)}>Edit Project</Button> :
                <div className="project-edit-container">
                    <Button className="none-border" onClick={() => { setEdit(project.id)}} ><Image src={EditIcon} /></Button>
                    <Typography className="project-date">{project.date}</Typography>
                    <Button className="edit-delete-btn" onClick={() => confirmDeleting(project)}><Image src={DeleteIcon}/></Button>
                </div>
            }
        </div>
    )
}