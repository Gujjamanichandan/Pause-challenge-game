import { useImperativeHandle , useRef } from "react"

export default function ResultModel({ ref, targetTime, result }) {

    const dialog = useRef()

	useImperativeHandle(ref, () => ({
		open() {
			dialog.current.showModal();
		}
	}));
	return (
		<dialog ref={dialog} className="result-modal" open>
			<h2>You {result}</h2>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				you stoped at <strong>x seconds</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	)
}
