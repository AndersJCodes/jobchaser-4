function HeroSearch({
  searchTerm,
  onSearch,
  locationOptions,
  educationOptions,
  onLocationChange,
  onEducationChange,
}) {
  return (
    <div className="bg-[url(./assets/simon-abrams-unsplash.jpg)] bg-cover bg-center bg-slate-400 bg-blend-multiply py-36 px-1 md:px-8 relative text-white overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold md:text-6xl text-5xl">
          Search for LIA-developer
        </h1>
        <p className="py-4 w-11/12 md:text-2xl text-xl font-light md:w-3/4 xl:w-2/4">
          If you are looking for a junior developer to help you, for free, and
          for a total of 6-months, you have come to the right place. Search for
          wanted skills or browse by scrolling down.
        </p>
        <div className="pt-4 w-11/12 md:w-2/4 lg:max-w-3xl">
          <div className="relative z-30 text-base text-gray-800">
            <input
              type="text"
              value={searchTerm}
              onChange={onSearch}
              placeholder="input search term"
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6 block w-full"
            />
            <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
          </div>
          <div className="flex gap-2 py-4 text-base text-gray-800">
            <select
              name=""
              id=""
              placeholder="Location"
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6"
              onChange={onLocationChange}
            >
              <option defaultValue="">All Locations</option>
              {locationOptions}
            </select>
            <select
              name=""
              id=""
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6"
              onChange={onEducationChange}
            >
              <option className="text-gray-300" defaultValue="">
                All educations
              </option>
              {educationOptions}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
