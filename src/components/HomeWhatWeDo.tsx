import { IconType } from "react-icons";
import { TfiCar, TfiLocationPin, TfiWallet } from "react-icons/tfi";

function HomeWhatWeDo() {
  return (
    <div className="container mx-auto md:flex flex-row p-16 space-y-6 md:space-y-0 md:space-x-11 md:columns-3">
      {[
        {
          icon: TfiLocationPin,
          title: "Availability",
          content:
            "Diam tincidunt tincidunt erat at semper fermentum. Id ultriciesquis",
        },
        {
          icon: TfiCar,
          title: "Comfort",
          content:
            "Diam tincidunt tincidunt erat at semper fermentum. Id ultriciesquis",
        },
        {
          icon: TfiWallet,
          title: "Savings",
          content:
            "Diam tincidunt tincidunt erat at semper fermentum. Id ultriciesquis",
        },
      ].map(
        (
          item: { icon: IconType; title: string; content: string },
          index: number
        ) => {
          const Icon = item.icon;
          return (
            <div className="flex flex-col items-center space-y-2" key={index}>
              <Icon size={40} className="text-gray-500" />
              <div className="text-2xl text-gray-600">{item.title}</div>
              <div className="text-center w-2/3 md:w-full">{item.content}</div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default HomeWhatWeDo;
