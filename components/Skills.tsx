import uniqid from "uniqid";
import { skills } from "../portfolio";
import Chip from "@mui/material/Chip";
import CustomSection from "./ui/CustomSection";

const Skills = () => {
 if (!skills.length) return null;

 return (
  <CustomSection title="Skills" id="skills" className="py-4">
   <ul className="w-[95%] max-w-[450px] mx-auto flex justify-center items-start flex-wrap space-x-2 ">
    {skills.map((skill) => (
     <div key={uniqid()} className="mb-2">
      <Chip color="primary" variant="filled" size="medium" label={skill}></Chip>
     </div>
    ))}
   </ul>
  </CustomSection>
 );
};

export default Skills;
