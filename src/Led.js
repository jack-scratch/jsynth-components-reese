import {
	React,
	useRef,
	useEffect
} from "react";
import {
	inert,
	js
} from "./col.js";

const Led = props => {
	const ref = useRef(null);

	let canvas;

	const clear = ctx => {
		ctx.fillStyle = inert;

		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	const draw = ctx => {
		ctx.fillStyle = js;

		ctx.fillRect(0, 0, 30, 70);
	}

	useEffect(() => {
		canvas = ref.current;

		canvas.width = props.wd;
		canvas.height = props.ht;

		const ctx = canvas.getContext("2d");

		clear(ctx);
		draw(ctx);
	}, [draw]);

	return (
		<canvas ref={ref} />
	);
}

export default Led;
