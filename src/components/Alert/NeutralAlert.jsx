const Alert = ({ message, setMessage }) => {
  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-4 z-50">
      <div
        role="alert"
        className="rounded-xl border border-slate-400 bg-slate-100 text-slate-900 p-4 shadow-md flex items-start gap-4"
      >
        <div className="flex-1">
          <div className="flex-1">
            <p className="text-sm">{message}</p>
          </div>
        </div>

        <button
          onClick={() => {
            setMessage("");
          }}
          className="text-slate-500 transition hover:text-slate-600"
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
