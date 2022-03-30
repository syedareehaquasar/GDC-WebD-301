import React from 'react'

const AppContainer = (props: {children: React.ReactNode}) => {
	return (
		<div className="flex min-h-screen bg-cyan-100 items-center">{props.children}</div>
	)
}

export default AppContainer