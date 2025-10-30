function Loader() {
  return (
    <div className="bg-slate-200/20 absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <button
        type="button"
        className="bg-yellow-500 text-white font-medium px-4 py-2 rounded flex items-center"
        disabled
      >
        <svg
          className="mr-3 size-5 animate-spin text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        Loading...
      </button>
    </div>
  );
}

export default Loader;