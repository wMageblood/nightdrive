import ROUTES from "../routes";
import logo from "../assets/ascended-logo-ok-purple.png"
import { MagiMark } from "./svg/MagiMark";

const currentPath = window.location.pathname;

const Navbar = () => {
  return (
    <div className={``}>
      <div className='hidden md:grid grid-cols-3 place-items-center relative mt-10 h-15 mx-auto bg-[#0e1220] rounded-md border border-[#181b28]'>
        <div className=''>
          <div className='absolute -top-9 left-4'>
            <MagiMark width={'w-35'} />
          </div>
          <a href={`/`}><img className='absolute w-22 h-22 -top-3 left-11' src={logo} /></a>
        </div>

        <div>
            {ROUTES.map(({path, routeName}) => <a key={path} className={`font-Rajdhani text-2xl mx-10 uppercase font-semibold text-[#cad0d3] ${currentPath === path ? 'text-accentPurple' : 'text-[#cad0d3]'}`} href={path}>{routeName}</a>)}
        </div>

        <div className='justify-self-end mr-1 tracking-tighter border border-[#181b28]'>
          <a href={`/apply`} className='bg-[#cad0d3] px-3 py-2 rounded-md font-Rajdhani shadow-soft-blur uppercase text-2xl font-semibold'>APLICA</a>
        </div>
      </div>

      <div className='grid md:hidden grid-cols-3 place-items-center shadow-soft-blur relative mt-10 h-15 mx-auto bg-[#0e1220] rounded-md border border-[#181b28]'>
        <div className=''>
          <div className='absolute -top-9 -left-9'>
            <MagiMark width={'w-35'} />
          </div>
          <a href={`/`}><img className='absolute w-20 h-20 -top-2 -left-1' src={logo} /></a>
        </div>
        <div className='col-span-2 w-full justify-between items-center mr-6 *:font-Rajdhani *:font-semibold text-lg flex'>
          <a href={'/roster'} className='text-white text-2xl'>ROSTER</a>
          <a href={'/about'} className='text-white text-2xl'>ABOUT</a>
          <a href={'/apply'} className='text-[#0e1220] bg-white px-2 py-1 text-2xl rounded-md border border-[#181b28] shadow-soft-blur'>APPLY</a>
        </div>

      </div>

    </div>
  );
};

export default Navbar;