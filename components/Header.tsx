import { header } from "../portfolio";
import Navbar from "./Navbar";
import CustomLink from "./ui/CustomLink";

const Header = () => {
 const { homepage, title } = header;

 return (
  <header className="header px-8 py-12 h-20 md:h-16 max-w-1100px w-95 mx-auto flex items-center justify-between">
   <h3>
    {homepage ? (
     <CustomLink href={homepage} className="text-3xl font-bold">
      {title}
     </CustomLink>
    ) : (
     title
    )}
   </h3>
   <Navbar />
  </header>
 );
};

export default Header;
