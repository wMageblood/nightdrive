import ROUTES from "../routes";
import logo from "../assets/ascended-logo.png"
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
            {ROUTES.map(({path, routeName}) => <a key={path} className={`font-Inter text-lg mx-10 uppercase font-semibold ${currentPath === path ? 'text-[#ac48fa]' : 'text-[#cad0d3]'}`} href={path}>{routeName}</a>)}
        </div>

        <div className='justify-self-end mr-1 tracking-tighter'>
          <a href={`/apply`} className='bg-[#ac48fa] shadow-[0_0_25px_rgba(172,72,250,0.55),0_0_60px_rgba(172,72,250,0.35)] px-3 py-2 mr-5 rounded-md font-Inter tracking-tighter uppercase text-lg font-semibold'>APLICA</a>
        </div>
      </div>

      <div className='flex md:hidden items-center justify-between shadow-soft-blur mt-10 h-15 mx-auto bg-[#0e1220] rounded-md border border-[#181b28]'>
          <a className='ml-2' href={`/`}><img className='w-10 h-10' src={logo} /></a>
          <a href={'/roster'} className='text-[#cad0d3] font-semibold text-lg'>ROSTER</a>
          <a href={'/about'} className='text-[#cad0d3] font-semibold text-lg'>NOSOTROS</a>
          <a href={'/apply'} className='text-[#0e1220] bg-[#ac48fa] font-semibold px-2 py-1 text-lg rounded-md border border-[#181b28] shadow-soft-blur mr-2'>APLICA</a>
      </div>


    </div>
  );
};

export default Navbar;