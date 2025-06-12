import React from 'react'
import { useState, useRef } from 'react'

export default function TimeChallenge({ title, targetTime }) {
	const timer = useRef()

	const [timerExpired, setTimerExpired] = useState(false)
	const [timeStart, setTimeStart] = useState(false)

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true)
		}, targetTime * 1000)
		setTimeStart(true)
	}

	function handleStop() {
		clearTimeout(timer.current)
	}

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p>lost</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? 's' : ''}{' '}
			</p>
			<p>
				<button onClick={timeStart ? handleStop : handleStart}>
					{timeStart ? 'stop' : 'start'} challenge
				</button>
			</p>
			<p className={timeStart ? 'active' : undefined}>
				{timeStart ? 'Time is Running...' : 'Time is stoped...'}
			</p>
		</section>
	)
}
