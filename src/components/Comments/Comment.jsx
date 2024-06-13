const Comment = (props) => {
  const { username, createdAt, children } = props;

  return (
    <div className="px-20">
      <div className="grid grid-cols-1">
        <div className="w-full border-2 rounded bg-slate-100 p-6">
          <h1 className="font-bold">{username}</h1>
          <p className="text-slate-500">{createdAt}</p>
          <p className="mt-5">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
