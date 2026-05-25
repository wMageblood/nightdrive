import ROUTES from "../routes";

const currentPath = window.location.pathname;

const Navbar = () => {
  return (
    <div className="text-center py-4 mx-8 font-Roboto border-b border-gray-neutral-900">
      <div>
        <li>
          {ROUTES.map(({path, routeName}) => <a key={path} className={`text-headerDefaultColor hover:text-headerHoverColor transition duration-300 uppercase font-600 xl:mx-15 mx-5 ${currentPath === path ? "text-highlightColor4 hover:text-highlightColor4 underline border-highlightColor4" : null }`} href={path}>{routeName}</a>)}
        </li>
      </div>
    </div>
  );
};

export default Navbar;