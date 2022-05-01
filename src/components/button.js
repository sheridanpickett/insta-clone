export default function Button({type, disabled, children, ...props}) {
    return (
        <button 
            disabled={disabled}
            className="w-full mt-2 text-white text-sm font-semibold rounded p-[5px] bg-cornflowerblue disabled:bg-paleturquiose" 
            type={type||null}
            {...props}
        >
            {children}
        </button>
    )
}