import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const HeroHeader = () => {
    return ( 
        <div className="flex-col space-y-3 pt-8 text-3xl font-semibold leading-tight pr-2">
            <RoughNotationGroup show={true}>
            <div className="">Hello, my name is <p className="text-gradient-primary font-bold">Kurt</p>.</div>
            <div>I'm currently a <RoughNotation type="highlight" color="#3b82f6" multiline="true">Software Engineer</RoughNotation> at <RoughNotation type="underline" color="#3b82f6">Amazon</RoughNotation>.</div>
            </RoughNotationGroup>
      </div>
    );
}
 
export default HeroHeader;