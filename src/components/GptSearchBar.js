const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <div className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 text-white px-4 py-2 m-4 rounded-lg col-span-3">
          Search
        </button>
      </div>
    </div>
  );
};
export default GptSearchBar;
