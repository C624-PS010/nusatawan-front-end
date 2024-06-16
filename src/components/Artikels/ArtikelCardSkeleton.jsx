const ArticleCardSkeleton = () => {
  return (
    <div className="block">
      <div className="p-4 shadow-lg transition-all duration-500 rounded-2xl min-h-[450px] flex flex-col justify-between bg-gray-200 animate-pulse">
        <div className="overflow-hidden">
          <div className="mx-auto h-[250px] w-full bg-gray-300"></div>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold bg-gray-300 h-7"></h1>
          <p className="line-clamp-2 bg-gray-300 h-14"></p>
        </div>
        <div className="inline-block bg-gray-300 rounded p-1 w-20">
          <p className="line-clamp-1 text-gray-300 text-sm px-2 text-center bg-gray-300"></p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
