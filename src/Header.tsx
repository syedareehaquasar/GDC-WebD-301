import React from 'react'
import logo from "./logo.svg";

const Header = (props: {title: string}) => {
	return (
		<div className="flex gap-2 items-center">
        <img src={logo} className="animate-spin h-16 w-16" alt="logo" style={{animation: "spin 2s linear infinite"}} />
        <h1 className="text-center text-xl p-2 font-bold text-cyan-500">
          {props.title}
        </h1>
        <br />
      </div>
	)
}

export default Header