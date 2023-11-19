const ProjectTag = (props) => {
    return (  
        <div className="flex border rounded-xl px-2.5 py-1 w-fit text-xs">
            <span>{ props.name }</span>
        </div>
    );
}
 
export default ProjectTag;