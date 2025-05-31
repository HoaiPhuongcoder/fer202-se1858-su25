function Search() {
  return (
    <div>
      <form action="">
        <label className="flex px-1.5 py-2 border border-gray-300 rounded-md">
          <div className="flex items-center pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8f8a8a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="border-0 outline-0 dark:placeholder:text-gray-100"
          />
        </label>
      </form>
    </div>
  );
}

export default Search;
