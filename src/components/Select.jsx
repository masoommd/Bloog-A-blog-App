import React, {useId} from 'react'

function Select({
    options,
    label,
    classname='',
    ...props
},ref) {
    const id = useId();
  return (
    <div className='w-full '>
        {label && <label htmlFor={id} className=''></label>}
        <select 
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-gray-200 text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}> 
                    {option}
                    </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)