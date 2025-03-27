import React from 'react';
import {useParams} from "react-router-dom";
import {getProjectsItem} from "../../api/projects/ProjectsData";

function ProjectDetails(props) {
    const {slug} = useParams();
    const data = getProjectsItem(slug, 'slug');


    if(!data)
        return <h1>{slug}</h1>


    return (data.component({data}));
}

export default ProjectDetails;