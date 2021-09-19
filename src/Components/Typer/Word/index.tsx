import React from "react"

const Word: React.FC<{ word: string; validKeys: string[] }> = ({
	word,
	validKeys,
}) => {
	if (!word) return null

	const joinedKeys = validKeys.join("")
	const matched = word.slice(0, joinedKeys.length)
	const remainder = word.slice(joinedKeys.length)

	return (
		<div className="valid-keys">
			<span className="matched">{matched}</span>
			<span className="remainder">{remainder}</span>
		</div>
	)
}

export default Word
