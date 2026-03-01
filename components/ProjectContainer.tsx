import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { projects } from "../portfolio";
import CustomLink from "./ui/CustomLink";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ProjectContainer = ({ project }: { project: (typeof projects)[0] }) => (
 <Card variant="outlined" color="primary">
  <CardContent>
   <div className="flex items-baseline space-x-1 flex-wrap">
    <h3 className="font-display text-2xl">{project.name}</h3>
    <span className="font-display"> - {project.year}</span>
   </div>

   <p className="mt-1 leading-relaxed">{project.description}</p>
   {project.stack && (
    <ul className="flex flex-wrap my-2 gap-2">
     {project.stack.map((item) => (
      <li key={uniqid()}>
       <Chip color="primary" variant="filled" size="small" label={item}></Chip>
      </li>
     ))}
    </ul>
   )}

   <CardActions>
    {project.sourceCode && (
     <CustomLink
      href={project.sourceCode}
      aria-label="source code"
      variant="icon"
      target="_blank">
      <GitHubIcon />
     </CustomLink>
    )}

    {project.liveUrl && (
     <CustomLink
      href={project.liveUrl}
      aria-label="live preview"
      variant="icon"
      target="_blank">
      <LaunchIcon />
     </CustomLink>
    )}

    {project.projectUrl && (
     <CustomLink
      href={project.projectUrl}
      aria-label="project preview"
      variant="icon">
      <VisibilityIcon />
     </CustomLink>
    )}
   </CardActions>
  </CardContent>
 </Card>
);

export default ProjectContainer;
