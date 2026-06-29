import Navbar from "../components/Navbar";
import { InputForm } from "../components/InputForm"
import banner from "../assets/banners/banner-apply.png"
import { RecruitmentStatus } from "../components/RecruitmentStatus";

const Apply = () => {
  return (
    <div className='w-[85%] mx-auto mb-10'>
      <Navbar />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-full mr-5 relative'>
        <div className='col-span-1 lg:col-span-2 min-h-24 mb-5 md:mb-0 w-full rounded-md border shadow-3xl border-slate-800' style={{backgroundImage: `url(${banner})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='md:ml-5'>
          <RecruitmentStatus />
        </div>
      </div>


        <div className="mt-10 w-full md:-[75%] mx-auto">
          <h1 className='text-white text-4xl font-semibold uppercase font-Rajdhani text-center'>¡Aplica aquí!</h1>
          <h2 className='text-slate-800 text-md font-semibold font-Rajdhani text-center mb-10'>Este apply nos llega a Discord, no es necesario envíar más de uno.</h2>
          <InputForm />
        </div>
    </div>
  );
};

export default Apply