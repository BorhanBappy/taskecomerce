import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faGift,
  faPhoneSquare,
  faUsers,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";

// Define the type for each banner item
interface Banner {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any; // FontAwesome icon can be of type `any`
  title: string;
  text: string;
}

const banners: Banner[] = [
  {
    icon: faTruck,
    title: "Free Delivery",
    text: "From 275 AED",
  },
  {
    icon: faMoneyBill1,
    title: "Cash on Delivery",
    text: "From 275 AED",
  },
  {
    icon: faGift,
    title: "Free Gift Box",
    text: "& Gift Note",
  },
  {
    icon: faPhoneSquare,
    title: "Contact Us",
    text: "123 456 789",
  },
  {
    icon: faUsers,
    title: "Loyalty",
    text: "Rewarded",
  },
];

const BannerSection: React.FC = () => {
  return (
    <div className="container mx-auto hidden lg:flex flex-wrap justify-between items-center gap-4 p-4 bg-gray-100">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md w-full sm:w-auto"
        >
          <div className="text-blue-500 text-3xl">
            <FontAwesomeIcon
              icon={banner.icon}
              className="text-orange-500 h-12 w-12"
            />
          </div>
          <div>
            <h5 className="text-lg font-semibold capitalize">{banner.title}</h5>
            <p className="text-gray-600">{banner.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
