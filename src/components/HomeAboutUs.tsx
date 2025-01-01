import HomeImage1 from "../assets/images/Home-Image-1.png";

function HomeAboutUs() {
  return (
    <div className="container mx-auto md:flex flex-row p-8 md:p-16 md:space-x-11 md:columns-3">
      <div className={`md:w-1/2`}>
        <img className="" src={HomeImage1} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col space-y-5 mt-12 md:mt-4">
        {[
          {
            title: "Erat at semper",
            content:
              "Viverra scelerisque mauris et nullam molestie et. Augueadipiscing praesent nisl cras nunc luctus viverra nisi",
          },
          {
            title: "Erat at semper",
            content:
              "Viverra scelerisque mauris et nullam molestie et. Augueadipiscing praesent nisl cras nunc luctus viverra nisi",
          },
          {
            title: "Erat at semper",
            content:
              "Viverra scelerisque mauris et nullam molestie et. Augueadipiscing praesent nisl cras nunc luctus viverra nisi",
          },
          {
            title: "Erat at semper",
            content:
              "Viverra scelerisque mauris et nullam molestie et. Augueadipiscing praesent nisl cras nunc luctus viverra nisi",
          },
          {
            title: "Erat at semper",
            content:
              "Viverra scelerisque mauris et nullam molestie et. Augueadipiscing praesent nisl cras nunc luctus viverra nisi",
          },
        ].map((item: { title: string; content: string }, index: number) => {
          return (
            <div className="space-y-3" key={index}>
              <div className="flex flex-row space-x-2 items-center">
                <span className="inline-flex items-center justify-center text-center h-7 w-7 rounded-full bg-blue-700 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  {index + 1}
                </span>
                <div className="font-bold text-xl">{item.title}</div>
              </div>
              <div className="text-gray-600">{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeAboutUs;
