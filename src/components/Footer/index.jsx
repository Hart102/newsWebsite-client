import { pages } from "@/util/index";

const index = () => {
  return (
    <section className="bg-inherit">
      <div className="container mx-auto flex flex-col gap-5 py-20 px-0">
        <div className="flex justify-center flex-wrap gap-3 text-sm font-semibold1 uppercase">
          {pages.map((page, index) => (
            <p key={index} className="cursor-pointer">
              {page}
            </p>
          ))}
        </div>
        <div className="text-center">
          <p>© 2023 LeatestHappenings Terms Privacy Cookies</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default index;
