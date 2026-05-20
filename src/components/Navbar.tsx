import ROUTES from "../routes";

const Navbar = () => {
  return (
    <div className="text-center mt-5 font-Roboto">
      <li className="">
        {ROUTES.map(({path, routeName}) => <a key={path} className="text-white uppercase font-600 xl:mx-15 mx-5" href={path}>{routeName}</a>)}
      </li>
      {/* <li className="flex justify-center *:text-white">
        <ul className="mx-auto">Home</ul>
        <ul className="mx-auto">Roster</ul>
        <ul className="mx-auto">About</ul>
        <ul className="mx-auto">Apply</ul>
      </li> */}
    </div>
  );
};

export default Navbar;