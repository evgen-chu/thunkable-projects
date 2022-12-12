import {useState} from "react";
import moment from "moment/moment";
import {ProjectType} from "../types/types";
import {Modal} from "antd";

type UseProjectPropsType = {
    projects: ProjectType[];
    setProjects: (projects: ProjectType[]) => void;
}
export const useProject = (props: UseProjectPropsType) => {
    const {projects, setProjects} = props;
    const [nextId, setNextId] = useState(1)
    const [editId, setEdit] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const {confirm} = Modal;


    const addNewProject = () => {
        const date = moment().format('lll');
        const newProject: ProjectType = { id: nextId, name: "", date: date};
        setNextId(prevState => prevState + 1 )
        const newArray: ProjectType[] = [...projects, newProject];
        setProjects(newArray);
        setInputValue('');
    }

    const deleteProject = (project: ProjectType) => {
        const updatedArray = projects.filter((projectToDelete) =>  projectToDelete.id !== project.id);
        setProjects(updatedArray);
    }

    const editProject = (project: ProjectType, newName: string) => {
        let editedProjects = projects.map((projectToEdit) => {
            if (projectToEdit.id === project.id) {
                projectToEdit.name = newName;
            }
            return projectToEdit;
        });
        setProjects(editedProjects);
        setEdit(0);
        setInputValue('');
    };

    const confirmDeleting = (project: ProjectType) => {
        confirm({
            title: 'Are you sure you want to delete this project?',
            content:
                "This action can't be undone.",
            onOk() {
                try {
                    deleteProject(project);
                } catch (e) {
                    return console.log('Oops errors!');
                }
            },
            onCancel() {},
        });
    }

    return {
        nextId,
        setNextId,
        editId,
        setEdit,
        inputValue,
        setInputValue,
        addNewProject,
        deleteProject,
        editProject,
        confirmDeleting
    }
}