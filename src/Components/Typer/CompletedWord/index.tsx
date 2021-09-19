import React from "react"

const CompletedWords: React.FC<{ completedWords: string[] }> = ({
	completedWords,
}) => {
	return (
		<div className="completed-words">
			<ol>
				{completedWords.map((word: string, index: number) => (
					<li key={index}>{word}</li>
				))}
			</ol>
		</div>
	)
}

export default CompletedWords
