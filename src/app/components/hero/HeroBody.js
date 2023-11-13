import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';

const HeroBody = () => {
    return (  
        <div className="text-lg text-white text-opacity-70 space-y-2">
            <p>
                Currently working in a Backend focused team at <FontAwesomeIcon className="ml-0.5" icon={faAmazon} /> Amazon, my professional experience is mostly from backend development. 
            </p>
            <p>
                However, I'm also very interested in frontend development and often work on the frontend aspect in personal/group projects.
            </p>
        </div>
    );
}
 
export default HeroBody;