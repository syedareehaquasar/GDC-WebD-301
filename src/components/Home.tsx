import React from "react";
import logo from "../logo.svg";

export default function Home(props: {openFormCB: () => void}) {
    return (
        <>
        <div className="flex">
            <img className="h-48" src={logo} alt="logo" />
            <div className="items-center flex-1 flex justify-center">
                <p className="font-bold text-cyan-900">Welcome to the Home Page</p>
            </div>
        </div>
        <button className="p-2 mt-4 m-1 bg-cyan-500 w-full text-gray-100 rounded-lg shadow outline-2 outline-cyan-900"
              onClick={props.openFormCB}>
              Open Form
            </button>
        </>
    );
}