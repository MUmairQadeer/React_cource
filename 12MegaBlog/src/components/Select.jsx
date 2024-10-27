import React, {useId} from "react";

function Select ({
    options,
    label,
    className,
    ...props
},ref){
  const id =useId()

  return(
    <div className="w-full">
        {label && <label htmlFor={id} className="px-1">{label}</label>}
        <select 
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg font-bold bg-white text-black bold outline-none
            focus;bg-gray-50 duration-200 border border-gray-200-full ${className}`}
>
            {options?.map((option) =>(
                <option key={option} value={option} className="font-bold">
                    {option.toUpperCase()}
                </option>
            ))}
        </select>
    </div>
  )
}
export default React.forwardRef(Select)