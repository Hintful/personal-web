import HeroTimelineItem from "./HeroTimelineItem";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const HeroTimeline = () => {
    return ( 
        <div className="flex-col space-y-8">
            <span className="text-xl font-bold"><RoughNotation color="#3b82f6" animationDelay="1500" show={true}>Timeline</RoughNotation></span>
            <ol class="relative border-s border-gray-200 dark:border-gray-700 space-y-8">
                <HeroTimelineItem main={"Software Development Engineer @ Amazon"} sub={"Oct. 2021 - Present"} content={"Get started with dozens of web components and interactive elements built on top of Tailwind CSS."} />
                <HeroTimelineItem main={"Graduated from University of Waterloo"} sub={"June. 2021"} content={"Graduated with a BCS in Computer Science at University of Waterloo"} />
                <HeroTimelineItem main={"First experience with coding"} sub={"2010"} content={"First experience with coding with C/C++ - eventually also participated in Canadian Computing Contest (CCC) in 2011"} />
            </ol>
        </div>
    );
}
 
export default HeroTimeline;