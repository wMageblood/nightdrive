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
      className={`${status ? "saturate-5" : null} w-1/2 bg-highlightColor3 hover:bg-highlightColor3/50 rounded-full h-10 font-bold tracking-tighter shadow-3xl active:shadow-3xl-inset`}>
        {status ? "Enviando..." : "ENVIAR"}
    </button>
  )
};