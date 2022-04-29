export default function FormButton({type, disabled, children}) {
    return (
        <button 
            disabled={disabled}
            className="w-full mt-2 text-white text-sm font-semibold rounded p-[5px] bg-cornflowerblue disabled:bg-paleturquiose" 
            type={type||null}
        >
            {children}
        </button>
    )
}