export default function () {
  return (
    <div class="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow  mx-auto mt-2">
      <img src="/public/image-1.jpg" alt="ax" className="rounded-t" />
      <div className="p-4">
        <h1 className="text-2xl text-g text-gray-900 dark:text-white font-bold font-inter">
          Noteworthy technology acquisitions 2021
        </h1>
        <h3 className="text-slate-500 py-2 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </h3>
        <a className="bg-blue-600  rounded-md text-white py-2 px-1.5 hover:bg-blue-800 transition-all inline-flex font-bold items-center  gap-x-1.5">
          Read more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
