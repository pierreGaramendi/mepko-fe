import React from 'react';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';

export const ProductSkeleton: React.FC = () => {
  return (
    <section className="flex flex-row justify-between">
      <div>
       {/*  <button className="Carousel_scrollButton__AsClE Carousel_scrollButtonLeft__umpWx">❮</button> */}
        <div>
          <div style={{ padding: 0, display: 'flex' }}>
            {/* Skeleton items */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg p-4 mr-3 text-center shrink-0 animate-pulse"
                style={{ width: '300px', height: '364px' }}
              >
                <div className="bg-gray-200 min-h-[268px] rounded-lg mb-4 flex items-center justify-center"><LoadingSpinner size={40} color="#6b7280" /></div>
                <div className="bg-gray-200 h-6 rounded-lg mb-2"></div>
                <div className="bg-gray-200 h-4 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
       {/*  <button className="Carousel_scrollButton__AsClE Carousel_scrollButtonRight__JPhhQ">❯</button> */}
      </div>
    </section>
  );
};
