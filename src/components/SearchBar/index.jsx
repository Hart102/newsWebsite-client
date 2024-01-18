import {
  BellIcon,
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const index = ({ onclick }) => {
  return (
    <div className="flex justify-between items-center gap-3 z-40 border border-neutral-700 px-5 lg:px-10 py-2 lg:py-3 lg:rounded-tr-2xl">
      <div className="w-[5%] lg:hidden">
        <Bars3BottomLeftIcon
          onClick={onclick}
          className="block w-5 lg:hidden"
        />
      </div>
      <form className="w-[90%] border border-neutral-700 rounded px-3 flex items-center gap-3">
        <MagnifyingGlassIcon className="w-5 z-10 cursor-pointer" />
        <input
          type="search"
          className="bg-transparent border-l w-[100%] py-2 px-4 outline-none placeholder:text-xs"
          placeholder="Search..."
        />
      </form>
      <div className="w-[5%] flex justify-end">
        <BellIcon className="w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default index;
