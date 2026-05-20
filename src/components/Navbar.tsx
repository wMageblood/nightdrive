import ROUTES from "../routes";

const Navbar = () => {
  return (
    <div className="text-center mt-5 font-Roboto">
      <li>
        {ROUTES.map(({path, routeName}) => <a key={path} className="text-white uppercase font-600 xl:mx-15 mx-5" href={path}>{routeName}</a>)}
      </li>
    </div>
  );
};

export default Navbar;