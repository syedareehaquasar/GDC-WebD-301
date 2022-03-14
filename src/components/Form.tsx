import React from 'react'

const Form = () => {
    return (
        <>
            <form>
                <label className='m-2'>First name:</label><br />
                <input  className='p-4 bg-gray-200 w-full text-blue-900 m-2' type="text" id="fname" name="fname" /><br />
                <label className='m-2' >Last name:</label><br />
                <input className='p-4 bg-gray-200 w-full text-blue-900 m-2' type="text" id="lname" name="lname" /><br />
                <label className='m-2' >Email:</label><br />
                <input  className='p-4 bg-gray-200 w-full text-blue-900 m-2' type="email" id="email" name="email" /><br />
                <label className='m-2' >Date of Birth:</label><br />
                <input className='p-4 bg-gray-200 w-full text-blue-900 m-2'  type="date" id="dob" name="dob" /><br />
                <input className='p-2 m-1 bg-blue-500 w-full text-gray-100' type="submit" name='submit' /><br />
            </form>
        </>
    )
}

export default Form