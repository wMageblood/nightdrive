interface SubmitButtonProps {
  status: boolean,
  handler: () => void,
}

export const SubmitButton = ({status, handler}: SubmitButtonProps) => {
  return (
    <button
      disabled={status}
      onClick={handler}
      type="submit"
      className={`${status ? "saturate-5" : null}  bg-[#ac48fa] hover:bg-[#ac48fa]/80 text-black font-Inter rounded-md h-16 md:h-12 px-4 font-bold shadow-[0_0_25px_rgba(172,72,250,0.55),0_0_60px_rgba(172,72,250,0.35)] hover:shadow-[0_0_35px_rgba(172,72,250,0.75),0_0_80px_rgba(172,72,250,0.45)] active:shadow-[inset_0_0_12px_rgba(0,0,0,0.35),0_0_20px_rgba(172,72,250,0.5)]`}>
        {status ? "Enviando..." : "Enviar apply"}
    </button>
  )
};