import CarCard from "./CarCard";
import { cars } from "../data/cars";
import PageSubHeadingWithLink from "./PageSubHeadingWithLink";

function HomeChooseCar() {
  return (
    <div>
      <PageSubHeadingWithLink
        titlLink="see more"
        titlLinkURL="/"
        title="Choose the car that suits you"
      />
      <div className="container px-4 lg:px-0 mx-auto grid md:justify-between mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cars.map((item, index) => {
          return (
            <CarCard
              key={index}
              id={item.id}
              brand={item.brand}
              costPerMeter={item.costPerMeter}
              waitAmountPerHour={item.waitAmountPerHour}
              model={item.model}
              slug={item.slug}
              carSpecifications={item.carSpecifications}
              images={item.images}
              bookedDates={item.bookedDates}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeChooseCar;
