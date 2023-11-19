import ProjectTag from "./ProjectTag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const ProjectItem = (props) => {
    return (  
        <div className="flex-col border w-full rounded-lg p-4 space-y-1">
            <div className="flex items-center space-x-2 w-full justify-between">
                <span className="text-3xl tracking-tight font-semibold">{ props.item.name }</span>
                <div className="flex items-center space-x-1">
                    <Link href={props.item.link} target="_blank">
                        <FontAwesomeIcon className="hover:text-gray-700 transition ease-in-out" icon={faSquareGithub} size="2xl" />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-1">
                {
                    props.item.tags.map(tag => (
                        <ProjectTag name={tag} />
                    ))
                }
            </div>
            <div className="pt-4">
                <span className="text-sm">
                    { props.item.description }
                </span>
            </div>
            
        </div>
    );
}
 
export default ProjectItem;