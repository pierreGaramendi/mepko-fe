export default function Loading() {
    return (
      <>
        <div className="flex space-x-5 animate-pulse">
          <div className="gallery flex flex-col w-full">
            <div className="h-full w-full rounded-lg bg-gray-300 min-w-[851px] min-h-[929px]"></div>
            <div className="flex gap-3 mt-2">
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
            </div>
          </div>
          <div className="product-info w-2/5">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mt-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
            <div className="mt-4 h-8 bg-gray-300 rounded w-1/4"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="mt-6 h-10 bg-gray-300 rounded w-1/3"></div>
            <div className="mt-4 h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="flex mt-4 gap-2">
              <div className="h-10 bg-gray-300 rounded w-1/4"></div>
              <div className="h-10 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </>
    );
  };