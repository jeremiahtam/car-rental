import { Link } from "react-router";

interface PageHeadingProps {
  breadcrumbsArray: { link: string; name: string }[];
  title: string;
}
function PageHeading(props: PageHeadingProps) {
  return (
    <div className="px-4 lg:px-0 mb-4 md:mb-20">
      <div className="my-6 container mx-auto">
        <div className="container mx-auto text-2xl font-extrabold text-center">
          {props.title}
        </div>
        <div className="text-md text-center text-gray-400 my-4">
          {props.breadcrumbsArray.map((item, index) => {
            return (
              <span key={index}>
                <Link
                  to={
                    index + 1 === props.breadcrumbsArray.length
                      ? "#"
                      : item.link
                  }
                  className={`${
                    index + 1 === props.breadcrumbsArray.length && "text-black"
                  }`}
                >
                  {item.name}
                </Link>
                {index + 1 !== props.breadcrumbsArray.length && (
                  <span className="mx-1">/</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PageHeading;
