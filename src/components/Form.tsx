import React from 'react'

const formFields = [
    { id: 1, label: "First Name", type: "text" },
    { id: 2, label: "Last Name", type: "text" },
    { id: 3, label: "Email", type: "email" },
    { id: 4, label: "Date of Birth", type: "date" },
    { id: 5, label: "Phone Number", type: "tel" },
];

const Form = () => {
    return (
        <>
            {formFields.map((field) => (
                <div key={field.id}>
                    <label className='m-2'>{field.label}</label>
                    <input
                        type={field.type}
                        className="p-2 pb-3 bg-gray-200 w-full text-blue-900 m-2 rounded-lg shadow outline-2 outline-blue-900"
                    />
                </div>
            ))}
        </>
    )
}

export default Form