import {
  SiBmw,
  SiFord,
  SiJeep,
  SiMercedes,
  SiNissan,
  SiToyota,
} from "react-icons/si";

function CarBrands() {
  return (
    <div className="px-4 my-20">
      <div className="container mx-auto bg-slate-100 rounded-xl p-6">
        <div className="grid grid-cols-6 justify-between gap-24 lg:gap-10 overflow-x-scroll scrollbar-hide">
          <SiMercedes className="size-20 md:size-24" />
          <SiNissan className="size-20 md:size-24" />
          <SiFord className="size-20 md:size-24" />
          <SiJeep className="size-20 md:size-24" />
          <SiBmw className="size-20 md:size-24" />
          <SiToyota className="size-20 md:size-24" />
        </div>
      </div>
    </div>
  );
}

export default CarBrands;
