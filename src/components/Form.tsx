import React, {useState} from 'react'

const formFields = [
    { id: 1, label: "First Name", type: "text" },
    { id: 2, label: "Last Name", type: "text" },
    { id: 3, label: "Email", type: "email" },
    { id: 4, label: "Date of Birth", type: "date" },
    { id: 5, label: "Phone Number", type: "tel" },
];

const Form = (props: {closeFormCB: () => void}) => {
    const [state, setState] = useState(formFields);

    const addField = () => {
        setState([
            ...state, {
                id: state.length + 2, label: "New Field", type: "text"
            },
        ])
    }

    // const removeField = (id) => {
    //     setState(state.filter(field => field.id !== id))
    // }

    return (
        <>
                {state.map((field) => (
                    <div key={field.id}>
                        <label className='m-2 font-medium'>{field.label}</label>
                        <input
                            type={field.type}
                            className="p-2 pb-3 bg-gray-200 w-full text-cyan-900 m-2 rounded-lg shadow outline-2 outline-cyan-900"
                        />
                    </div>
                ))}
                <input className='p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900' type="submit" name='submit' /><br />
                <button
              className="p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900"
              onClick={props.closeFormCB}
            >
              Close Form
            </button>
            <button className="p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900"
              onClick={addField}>
                Add Fields
            </button>
        </>
    )
}

export default Form