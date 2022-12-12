import React from 'react';
import {Project} from "../Project/Project";
import {ProjectType} from "../../types/types";
import './ProjectList.css';

type ProjectListPropsType = {
    projects: ProjectType[];
    editId: number;
    inputValue: string;
    setEdit: (id: number) => void;
    setInputValue: (value: string) => void;
    confirmDeleting: (project: ProjectType) => void;
    editProject: (project: ProjectType, value: string) => void;
};
export const ProjectList = (props: ProjectListPropsType) => {
    const { projects, editId, inputValue, setEdit, setInputValue, confirmDeleting, editProject} = props;
    return (
        <div className="projects-container" >
                {projects.map((project, index) => {
                    return <Project
                        key={index}
                        project={project}
                        index={index}
                        editId={editId}
                        inputValue={inputValue}
                        setEdit={setEdit}
                        setInputValue={setInputValue}
                        confirmDeleting={confirmDeleting}
                        editProject={editProject} />
                })}
            </div>
    )
}