import React from 'react'

const CustomButton = ({title}) => {
    return (
        <button className="bg-custom-blue px-5 py-2 text-white rounded-md cursor-pointer hover:bg-white border-2 border-custom-blue hover:text-custom-blue transition-all">
            {title}
        </button>
    )
}
export default CustomButton
