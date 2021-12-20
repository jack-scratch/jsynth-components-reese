import React from "react";
import Out from "./Out";
import ctx from "./ctx";

const speaker = () => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: ctx.destination
			}
		]} />
	);
}

export default speaker;
