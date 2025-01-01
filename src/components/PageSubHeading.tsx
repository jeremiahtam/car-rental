interface PageSubHeadingProps {
  subheading: string;
}
function PageSubHeading(props: PageSubHeadingProps) {
  return (
    <div className="px-4">
      <div className="text-center font-extrabold text-3xl">
        {props.subheading}
      </div>
    </div>
  );
}

export default PageSubHeading;
