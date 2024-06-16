const ArtikelDetailSkeleton = () => {
  return (
    <div className="px-20 py-10">
      <div className="h-[300px] w-full bg-gray-300 animate-pulse">
        <div className="h-[300px] w-full"></div>
      </div>
      <div className="bg-gray-300 animate-pulse h-10 w-full mb-4"></div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-300 animate-pulse h-10 w-full"></div>
        <div className="bg-gray-300 animate-pulse h-10 w-full"></div>
        <div className="bg-gray-300 animate-pulse h-10 w-full"></div>
      </div>
    </div>
  );
};

export default ArtikelDetailSkeleton;
