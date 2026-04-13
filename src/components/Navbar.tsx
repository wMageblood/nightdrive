import ROUTES from "../routes";

const Navbar = () => {
  return (
    <div className="text-center mt-5">
      {ROUTES.map(({path, routeName}) => <a className="text-white mx-15 font-Roboto uppercase font-semibold" href={path}>{routeName}</a>)}
    </div>
  );
};

export default Navbar;