const index = ({ img, onchange }) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      <div className="h-[300px] w-full lg:w-1/2 border border-neutral-700 rounded">
        <img src={img} className="w-full h-full" />
      </div>
      <label htmlFor="upload" className="hover:text-blue-500 cursor-pointer">
        <p className="hover:bg-neutral-700 p-3 w-1/2 lg:w-1/5">Upload Image</p>
      </label>
      <input type="file" className="hidden" id="upload" onChange={onchange} />
    </div>
  );
};

export default index;
