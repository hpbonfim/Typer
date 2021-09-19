import React, { useEffect, useState } from "react"
import CompletedWords from "./CompletedWord"
import TypedKeys from "./TypedKeys"
import Word from "./Word"

const MAX_TYPED_KEYS = 30

const Typer: React.FC = () => {
	const [typedKeys, setTypedKeys] = useState<string[]>([])
	const [wordsList, setWordsList] = useState<string[]>([])
	const [word, setWord] = useState<string>("")
	const [validKeys, setValidKeys] = useState<string[]>([])
	const [completedWords, setCompletedWords] = useState<string[]>([])

	useEffect(() => {
		fetch("./palavras.json")
			.then((response) => response.json())
			.then((wordList) => {
				const list = wordList
					.filter((words: any) => !words.includes("-"))
					.filter((words: any) => !words.includes("."))
					.filter((words: any) => words.match(/^[a-zA-Z0-9]*$/))
					.filter((words: any) => words.length >= 3)
				setWordsList(list)
				setWord(list[0])
			})
	}, [])

	useEffect(() => {
		const wordFromValidKeys = validKeys.join("").toLowerCase()
		if (wordFromValidKeys.length !== 0 && wordFromValidKeys === word) {
			let newWord = ""

			do {
				newWord = getWord()
			} while (completedWords.includes(newWord))

			setWord(newWord)
			setValidKeys([])
			setCompletedWords((prev) => [...prev, word])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [validKeys, word])

	const getWord = () => {
		const index = Math.floor(Math.random() * wordsList.length)
		return wordsList[index].toLowerCase()
	}

	const isValidKey = (key: string, word: string) => {
		if (!word) return false
		return word.split("").includes(key)
	}

	const handleKeyDown = (event: any) => {
		event.preventDefault()
		const { key } = event
		if (key.length <= 1)
			setTypedKeys((prevState) =>
				[...prevState, key].slice(MAX_TYPED_KEYS * -1)
			)

		if (isValidKey(key, word)) {
			setValidKeys((prev) => {
				const isValidLength = prev.length <= word.length
				const isNextChar = isValidLength && word[prev.length] === key
				return isNextChar ? [...prev, key] : prev
			})
		}
	}

	return (
		<div className="container" tabIndex={0} onKeyDown={handleKeyDown}>
			<Word word={word!} validKeys={validKeys!} />
			<TypedKeys typedKeys={typedKeys} />
			<CompletedWords completedWords={completedWords} />
		</div>
	)
}

export default Typer
