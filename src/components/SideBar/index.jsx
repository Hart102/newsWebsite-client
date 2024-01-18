import { Link } from "react-router-dom";
import {
  Squares2X2Icon,
  Cog8ToothIcon,
  PencilSquareIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { routes } from "@/util";

const links = [
  { label: "dashboard", icon: Squares2X2Icon, href: routes[3] },
  { label: "new blog", icon: PencilSquareIcon, href: routes[4] },
  { label: "saved", icon: ArchiveBoxIcon, href: routes[3] },
  { label: "settings", icon: Cog8ToothIcon, href: routes[3] },
];

const index = ({ UseRef, onclick }) => {
  return (
    <div ref={UseRef} className="hidden text-sm  lg:block z-50">
      <div className="fixed top-[70px] lg:top-auto bg-neutral-900 h-[90%] p-5 w-full lg:w-[18%] rounded-s-2xl">
        <Link to={links[0].href} className="text- text-2xl font-bold1 italic">
          DribbleStories
        </Link>
        <div className="flex flex-col gap-6 capitalize hover:[&_a]:text-neutral-50 pt-20">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={onclick}
              className="flex gap-3 text-neutral-500"
            >
              <link.icon className="w-5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
