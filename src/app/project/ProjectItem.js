const ProjectItem = (props) => {
    return (  
        <div className="flex-col border w-full rounded-lg">
            <span>{ props.item.name }</span>
        </div>
    );
}
 
export default ProjectItem;