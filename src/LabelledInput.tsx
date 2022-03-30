import React from 'react'

export default function LabelledInput(props: {
    id: number;
    label: string;
    fieldType: string;
    removeFieldCB: (id: number) => void;
}) {
    return (
        <>
            <label className='m-2 font-medium'>{props.label}</label>
            <div className="flex gap-1">
                <input type={props.fieldType} className="p-2 pb-3 bg-gray-200 w-full text-cyan-900 m-2 rounded-lg shadow outline-2 outline-cyan-900" />
                <button className="mt-3 h-1/2 p-2 bg-red-500 text-gray-100 rounded-lg shadow outline-2 outline-cyan-900" onClick={() => props.removeFieldCB(props.id)}>
                    Remove
                </button>
            </div>
        </>
    )
}