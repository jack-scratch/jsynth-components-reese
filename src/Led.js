import {
	React,
	useRef,
	useEffect
} from "react";

const Led = props => {
	const ref = useRef(null);

	let canvas;

	const clear = ctx => {
		ctx.fillStyle = "#111";

		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	const draw = ctx => {
		ctx.fillStyle = "#f0db4f";

		ctx.fillRect(0, 0, 100, 100);
	}

	useEffect(() => {
		canvas = ref.current;
		const ctx = canvas.getContext("2d");

		clear(ctx);
		draw(ctx);
	}, [draw]);

	return (
		<canvas ref={ref}></canvas>
	);
}

export default Led;
