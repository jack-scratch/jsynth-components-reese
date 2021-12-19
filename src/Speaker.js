import React from "react";
import Out from "./Out";
import ctx from "./ctx";

const Speaker = () => {
	return (
		<Out refer={[
			{
				name: "Output",
				point: ctx.destination
			}
		]} name="Output" />
	);
}

export default Speaker;
