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
		<canvas refer={ref} />
	);
}

Led.defaultProps = {
	wd: 300,
	ht: 150
};

export default Led;
