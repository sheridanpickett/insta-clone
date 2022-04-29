export default function FormInput({value, onChange, placeholder}) {
    return (
        <input 
            className="w-full p-2.5 mb-1.5 text-xs text-app-gray-500 bg-app-gray-100 border border-app-gray-300 rounded-[3px]" 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        />
    )
}