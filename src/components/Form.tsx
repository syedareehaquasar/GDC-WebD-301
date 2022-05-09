import LabelledInput from "../LabelledInput";
import React, { useState, useEffect, useRef } from "react";

interface formData {
    id: number;
    title: string;
    formFields: formField[];
}

export interface formField {
    id: number;
    label: string;
    type: string;
    value: string;
}

const initialFormFields: formField[] = [];

const getLocalForms: () => formData[] = () => {
    const savedFormsJSON = localStorage.getItem("savedForms")
    return savedFormsJSON ? JSON.parse(savedFormsJSON) : []
}

const saveLocalForms = (localForms: formData[]) => {
    localStorage.setItem("savedForms", JSON.stringify(localForms))
}

const saveFormData = (currentState: formData) => {
    const localForms = getLocalForms();
    const updatedLocalForms = localForms.map((form) =>
        form.id === currentState.id ? currentState : form
    )
    saveLocalForms(updatedLocalForms);

}

function Form(props: { closeFormCB: () => void }) {
    const [selectedformState, setselectedformState] = useState(0);
    const [state, setState] = useState({
        id: Number(new Date()),
        title: "Untitled Form",
        formFields: initialFormFields
    })
    const [newField, setNewField] = useState("");
    const [newFieldType, setNewFieldType] = useState("");
    const [formList, setFormList] = useState(getLocalForms());
    const titleRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("Component mounted");
        document.title = "Form Editor";
        titleRef.current?.focus();
        return () => {
            console.log("Component unmounted");
            document.title = "React App";
        }
    }, [])

    useEffect(() => {
        let timeout = setTimeout(() => {
            saveFormData(state);
            console.log("State saved to Local Storage", state)
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }

    }, [state])

    const addField = () => {
        setState({
            ...state,
            formFields: [
                ...state.formFields,
                {
                    id: Number(new Date()),
                    label: newField,
                    type: newFieldType,
                    value: ""
                }
            ]
        })
        setNewField("");
        setNewFieldType("text");
    }

    const updateInputValue = (id: number, value: string) => {
        const newState = [...state.formFields];
        const stateObjectIndex = state.formFields.findIndex((field) => field.id === id);
        newState[stateObjectIndex] = { ...newState[stateObjectIndex], value };
        setState({ ...state, formFields: newState });
    }

    const removeField = (id: number) => {
        setState({ ...state, formFields: state.formFields.filter(field => field.id !== id) })
    }

    const resetForm = () => {
        setState({
            ...state,
            formFields: state.formFields.map((field) => {
                return ({ ...field, value: "" })
            })
        })
    }

    const getInitialState = (id: number) => {     //107
        const localForms = getLocalForms();
        setState(id === 0 ? {
            id: Number(new Date()),
            title: "Untitled Form",
            formFields: initialFormFields
        } : localForms.filter((form) => form.id === id)[0])
    }

    const openSelectedForm = (id: number) => {
        setselectedformState(id)
        getInitialState(id)
    }

    const deleteSelectedForm = (id: number) => {
        const localForms = getLocalForms();
        const updatedFormList = localForms.filter((form) => form.id !== id)
        setFormList(updatedFormList)
        saveLocalForms(updatedFormList)

    }

    const createNewForm = () => {
        const localForms = getLocalForms();
        const newForm = {
            id: Number(new Date()),
            title: "Untitled Form",
            formFields: initialFormFields
        };
        saveLocalForms([...localForms, newForm])
        setselectedformState(newForm.id)
        getInitialState(newForm.id)

    }

    return (
        <div className="mt-6">
            <div>
                {selectedformState === 0 ? (<div>
                    <button className="my-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={createNewForm}>New Form</button>
                    {formList.map((form) =>
                        <div key={form.id} className="flex justify-center my-2">
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{form.title} </h5>
                                <p className="text-gray-700 text-base mb-4">
                                    This form contains {form.formFields.length} questions to answer.
                                </p>
                                <button type="button" className="mx-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { openSelectedForm(form.id) }}>Open</button>
                                <button type="button" className="mx-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { deleteSelectedForm(form.id) }}>Delete Form</button>
                            </div>
                        </div>)
                    }
                </div>) :
                    (<div className="flex flex-col gap-2 p-4 divide-y-2 divide-dotted">
                        <input type="text" className="border-2 border-gray-200 rounded-lg p-2 m-2 flex-1" value={state.title} onChange={(e) => {
                            setState({
                                ...state,
                                title: e.target.value,
                            })
                        }}
                            ref={titleRef}
                        />
                        <div>

                            {state.formFields.map((field) =>
                                <LabelledInput id={field.id} key={field.id} label={field.label} fieldType={field.type} removeFieldCB={removeField} value={field.value} updateInputValueCB={updateInputValue} />
                            )}
                        </div>
                        <div className="flex gap-2">
                            <input type="text" className="border-2 border-gray-200 rounded-lg p-2 m-2 flex-1" value={newField} onChange={(e) => {
                                setNewField(e.target.value)
                            }} />
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' onClick={addField} >Add Field</button>

                        </div>
                        <div className='flex gap-4'>
                            <button onClick={(_) => {
                                saveFormData(state)
                            }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' >Save</button>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' onClick={props.closeFormCB}>close Form</button>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' onClick={resetForm}>Reset Form</button>

                        </div>
                    </div>)
                }</div>
        </div>
    );
}

export default Form;