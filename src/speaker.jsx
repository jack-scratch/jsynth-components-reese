import React from "react";
import Out from "./Out";

const speaker = () => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: window.ctx.destination
			}
		]} />
	);
}

export default speaker;
