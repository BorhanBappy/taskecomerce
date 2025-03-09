import Link from "next/link";

interface BreadcrumbProps {
  category: {
    _id: string;
    name: string;
  };
  productName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, productName }) => {
  return (
    <nav className="text-gray-500 text-sm mb-4">
      <Link href="/" className="hover:text-orange-500">
        Home
      </Link>{" "}
      &gt;
      <Link
        href={`/category/${category._id}`}
        className="hover:text-orange-500 ml-2"
      >
        {category.name}
      </Link>{" "}
      &gt;
      <span className="ml-2 text-black">{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
