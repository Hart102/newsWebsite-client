import { pages } from "@/util/index";

const index = ({ value, defaultValue, onchange, selectOption }) => {
  return (
    <div className="flex gap-3">
      <input
        value={value}
        type="text"
        className="w-1/2 p-3 bg-transparent border border-neutral-700 focus:outline-none"
        placeholder="Title"
        onChange={onchange}
      />

      <select
        defaultValue={defaultValue}
        onChange={selectOption}
        className="outline-none outline:outline-0 capitalize bg-transparent px-3 py-2 rounded-full cursor-pointer"
      >
        <option value="">Select Categories</option>
        {pages.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default index;
