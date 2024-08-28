import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb">
      <ul className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {index === pathSegments.length - 1 ? (
                <span className="capitalize text-gray-700">{segment}</span>
              ) : (
                <Link href={href} className="capitalize text-blue-500 hover:underline">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

