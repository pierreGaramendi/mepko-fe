import React from "react";
import { LoadingSpinner } from "../Spinner/LoadingSpinner";

export const ImageCarouselSkeleton: React.FC = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden ">
      <div className="relative">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(-0%)`,
            transition: "none",
          }}
        >
          {/* Skeleton del banner */}
          <div className="w-full h-[400px] bg-gray-200 animate-pulse relative">
            {/* Skeleton del contenido centrado */}
            <div className="absolute h-[400px] inset-0 flex items-center justify-center">
              <div className="w-full h-[400px] bg-gray-300 animate-pulse flex items-center justify-center">
                <LoadingSpinner size={40} color="#6b7280" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-gray-100 px-3 py-2 border-none cursor-default z-10 rounded-lg border-gray-700 border"
          disabled
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-gray-100 px-3 py-2 border-none cursor-default z-10 rounded-lg"
          disabled
        >
          &#10095;
        </button>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
        <div className="cursor-default mx-1 text-2xl text-gray-400 animate-pulse">•</div>
        <div className="cursor-default mx-1 text-2xl text-gray-400 animate-pulse">•</div>
        <div className="cursor-default mx-1 text-2xl text-gray-400 animate-pulse">•</div>
      </div>
    </div>
  );
};
