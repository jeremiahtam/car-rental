import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
interface PageSubHeadingWithLinkProps {
  title: string;
  titlLink: string;
  titlLinkURL: string;
  useTitleLink?: boolean;
}
function PageSubHeadingWithLink(props: PageSubHeadingWithLinkProps) {
  return (
    <div className="container px-4 lg:px-0 mx-auto flex justify-between space-x-20">
      <div className="font-bold text-xl md:text-3xl lg:text-5l w-2/5">
        {props.title}
      </div>
      {props.useTitleLink && (
        <div className="flex flex-row items-center">
          <Link to={props.titlLinkURL} className="font-bold text-xs">
            {props.titlLink}
          </Link>
          <FaArrowRight size={20} />
        </div>
      )}
    </div>
  );
}

export default PageSubHeadingWithLink;
