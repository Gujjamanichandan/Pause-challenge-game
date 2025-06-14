import React from 'react'
import { useState, useRef } from 'react'
import ResultModel from './ResultModel'

export default function TimeChallenge({ title, targetTime }) {
	const timer = useRef()
    const dialog = useRef()

	const [timeRemaining, setTimeRemaining] = useState(targetTime* 1000);

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;  

    if(timeRemaining <= 0){
        clearTimeout(timer.current);
       
        dialog.current.open();
    }

    function handleReset(){
            setTimeRemaining(targetTime * 1000);
    }

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10)
		}, 10)
		
	}

	function handleStop() {
        dialog.current.open();
		clearInterval(timer.current);
	}

	return (<>
     <ResultModel ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
		<section className="challenge">
			<h2>{title}</h2>
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? 's' : ''}{' '}
			</p>
			<p>
				<button onClick={timeIsActive ? handleStop : handleStart}>
					{timeIsActive ? 'stop' : 'start'} challenge
				</button>
			</p>
			<p className={timeIsActive ? 'active' : undefined}>
				{timeIsActive ? 'Time is Running...' : 'Time is stoped...'}
			</p>
		</section>
        </>
	)
}
