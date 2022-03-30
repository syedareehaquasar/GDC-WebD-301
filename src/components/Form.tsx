import React, { useState } from 'react'
import LabelledInput from '../LabelledInput';

const formFields = [
    { id: 1, label: "First Name", fieldType: "text" },
    { id: 2, label: "Last Name", fieldType: "text" },
    { id: 3, label: "Email", fieldType: "email" },
    { id: 4, label: "Date of Birth", fieldType: "date" },
    { id: 5, label: "Phone Number", fieldType: "tel" },
];

const Form = (props: { closeFormCB: () => void }) => {
    const [state, setState] = useState(formFields);
    const [newField, setNewField] = useState("");
    const [newFieldType, setNewFieldType] = useState("");

    const addField = () => {
        setState([
            ...state, {
                id: Number(new Date()), label: newField, fieldType: newFieldType
            },
        ]);
        setNewField("New Field");
        setNewFieldType("text");
    }

    const removeField = (id: number) => {
        setState(state.filter(field => field.id !== id))
    }

    const submitHandle = () => {
        alert("Details Submitted!")
    }

    return (
        <>
            <form>
                {state.map((field) => (
                    <LabelledInput
                        id={field.id}
                        label={field.label}
                        fieldType={field.fieldType}
                        removeFieldCB={removeField}
                    />
                ))}
                <div className='flex'>
                    <input className='m-2 p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900' type="reset" name='reset' />
                    <input className='m-2 p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900' type="submit" name='submit' onClick={submitHandle}/>
                </div>
            </form>

            <div className='divide-y-2'>
                <div className="m-2 flex g-4 justify-center">
                    <input className="p-2 pb-3 bg-gray-200 text-cyan-900 m-2 rounded-lg shadow outline-2 outline-cyan-900" type="text" value={newField} placeholder="Field Name" onChange={(e) => {
                        setNewField(e.target.value);
                    }} />
                    <input className="p-2 pb-3 bg-gray-200 text-cyan-900 m-2 rounded-lg shadow outline-2 outline-cyan-900" type="text" value={newFieldType} placeholder="Field Type" onChange={(e) => {
                        setNewFieldType(e.target.value);
                    }} />
                    <button className="mt-3 h-1/2 p-2 bg-green-500 text-gray-100 rounded-lg shadow outline-2 outline-green-900"
                        value={newField}
                        onClick={addField}>
                        Add Fields
                    </button>
                </div>


                <div className='m-2 flex'>
                    <button
                        className="p-2 mt-4 m-1 bg-red-600 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900"
                        onClick={props.closeFormCB}
                    >
                        Close Form
                    </button>
                </div>
            </div>
        </>
    )
}

export default Form