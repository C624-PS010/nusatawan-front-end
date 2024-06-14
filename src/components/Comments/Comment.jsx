const Comment = (props) => {
  const { username, createdAt, children } = props;

  return (
    // <div className="px-20">
    //   <div className="grid grid-cols-1">
    //     <div className="w-full border-2 rounded bg-slate-100 p-6">
    //       <h1 className="font-bold">{username}</h1>
    //       <p className="text-slate-500">{createdAt}</p>
    //       <p className="mt-5">{children}</p>
    //     </div>
    //   </div>
    // </div>

    <div className="px-4 md:px-20 py-6">
      <div className="grid grid-cols-1 gap-4">
        <div className="w-full border border-gray-300 rounded-lg shadow-sm bg-white p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fctmirror.org%2Fdummy-man-570x570%2F&psig=AOvVaw2QTfwrnhuZhDJgW4qcDkkt&ust=1718425806540000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj78JCh2oYDFQAAAAAdAAAAABAE"
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
              crossOrigin="anonymous"
            />
            <div>
              <h1 className="font-semibold text-lg text-gray-900">
                {username}
              </h1>
              <p className="text-sm text-gray-500">{createdAt}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 leading-relaxed">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
