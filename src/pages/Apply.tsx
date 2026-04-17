import Navbar from "../components/Navbar";
import { ApplyTitle } from "../components/svg/ApplyTitle";
import { InputForm } from "../components/InputForm"
import INPUT_FORM_DATA from "../constants/inputFormData";

const Apply = () => {
  return (
    <div>
      <Navbar />
        <div className="flex items-center justify-center mb-10 mt-25">
          <ApplyTitle />
        </div>
        <div className="">
          <InputForm />
        </div>
    </div>
  );
};

export default Apply