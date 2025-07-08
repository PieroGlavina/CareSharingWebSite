import React from 'react'

const CustomButton = ({title}) => {
    return (
        <button className="bg-custom-blue px-5 py-2 text-white rounded-md cursor-pointer">
            {title}
        </button>
    )
}
export default CustomButton
