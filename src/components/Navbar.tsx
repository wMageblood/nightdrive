import ROUTES from "../routes";

const Navbar = () => {
  return (
    <div className="text-center mt-5 font-Roboto">
      {ROUTES.map(({path, routeName}) => <a className="text-white mx-15 font-Roboto uppercase font-semibold tracking-tighter" href={path}>{routeName}</a>)}
    </div>
  );
};

export default Navbar;