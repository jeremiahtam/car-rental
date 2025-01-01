interface CatchPhraseSectionProps {
  bgImage: string;
}

function CatchPhraseSection(props: CatchPhraseSectionProps) {
  return (
    <div className="px-4 lg:px:0">
      <div className="container mx-auto flex flex-row rounded-2xl bg-blue-500 p-16 space-x-11 my-14">
        <div className="w-1/2">
          <div className="text-white text-xl md:text-3xl lgtext-6xl mb-2 bg-[url('assets/images/SkeedMarks.png')] bg-no-repeat">
            Experience the road like never before
          </div>
          <div className="text-gray-200 text-sm md:text-xl my-3">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${props.bgImage})` }}
          className={`w-1/2 bg-no-repeat bg-contain bg-center`}
        ></div>
      </div>
    </div>
  );
}

export default CatchPhraseSection;
