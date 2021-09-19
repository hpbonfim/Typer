import React from "react"

const TypedKeys: React.FC<{ typedKeys: string[] }> = ({ typedKeys }) => {
	return (
		<div className="typed-keys">
			{typedKeys.map((key: string, index: number) => (
				<span key={index}>{key}</span>
			))}
		</div>
	)
}

export default TypedKeys
