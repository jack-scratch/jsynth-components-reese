import React from "react";
import Out from "./Out";
import ctx from "./ctx";

const Speaker = () => {
	return (
		<Out name="Output" refer={[
			{
				name: "Output",
				point: ctx.destination
			}
		]} />
	);
}

export default Speaker;
