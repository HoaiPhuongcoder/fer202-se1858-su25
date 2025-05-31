function ToggleDarkMode({ isDarkMode, toggleDarkMode }) {
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="z-100 fixed top-3.5 right-5 p-3 bg-gray-100 dark:bg-gray-800/90 rounded-lg shadow-xs dark:shadow-gray-950 shadow-gray-400"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon-icon lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e08910"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun-moon-icon lucide-sun-moon"
          >
            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.9 4.9 1.4 1.4" />
            <path d="m17.7 17.7 1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.3 17.7-1.4 1.4" />
            <path d="m19.1 4.9-1.4 1.4" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default ToggleDarkMode;
