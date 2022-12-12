import React, {useState} from 'react';
import {ProjectType} from "./types/types";
import {Header} from "./components/Header/Header";
import {useProject} from "./hooks/useProject";
import {ProjectList} from "./components/ProjectList/ProjectList";

function ProjectsApp() {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const {
        editId,
        setEdit,
        inputValue,
        setInputValue,
        addNewProject,
        editProject,
        confirmDeleting
    } = useProject({projects, setProjects});
    const hasProjects = projects.length>0;

    const backgroundColorStyle = hasProjects ? {backgroundColor: '#F7F9FD'} : { backgroundColor: '#FFFFFF'};


  return (
      <div style={backgroundColorStyle}>
          <Header projects={projects} addNewProject={addNewProject} />
          {hasProjects && <ProjectList
              projects={projects}
              editId={editId}
              inputValue={inputValue}
              setEdit={setEdit}
              setInputValue={setInputValue}
              confirmDeleting={confirmDeleting}
              editProject={editProject} />
          }
      </div>
  );
}

export default ProjectsApp;
