const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <svg
        className="animate-spin h-30 w-30 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          d="M4 12a8 8 0 118 8V12H4z"
        />
      </svg>
    </div>
  );
};

export default Loading;
