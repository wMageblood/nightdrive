import Navbar from "../components/Navbar";
import { ApplyTitle } from "../components/svg/ApplyTitle";

const Apply = () => {
  return (
    <div>
      <Navbar />
        <div className="flex items-center justify-center mb-10 mt-25">
          <ApplyTitle />
        </div>
    </div>
  );
};

export default Apply