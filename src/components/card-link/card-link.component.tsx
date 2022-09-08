import { Link } from "react-router-dom";

const CardLink = ({ name, link, desc, onClickHandler }) => {
  return (
    <div className="m-5 mb-1 p-4 max-w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>

      <button onClick={onClickHandler} name={name}>
        <Link
          to={link}
          className="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cards
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </button>
      <p className="mb-3 max-w-fit first-letter:font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
};

export default CardLink;
