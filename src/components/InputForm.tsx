type InputFormProps = Partial<{
  type: string;
  id: string;
  required: boolean;
  className: string;
}>

export const InputForm = ({type, id, required, className}: InputFormProps) => {
  return (
    <div>

      <div className="mx-auto bg-red-500 min-w-xl w-xl lg:w-3xl min-h-6xl h-6xl rounded-sm">
        <div className="flex justify-between">
          <input className="bg-sky-400" placeholder="form0" type="text" />
          <input className="bg-lime-400" type="text" placeholder="form1" />
        </div>
        <div>
          <input className="bg-purple-700 w-full" placeholder="form2" type="text" />
          <input className="bg-slate-600 w-full" placeholder="form3" type="text" />
          <input className="bg-pink-600 w-full" placeholder="form4" type="text" />
          <input className="bg-blue-800 w-full" placeholder="form5" type="text" />
        </div>
      </div>

    </div>
  );
};