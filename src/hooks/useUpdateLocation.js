import { useState, useEffect } from "react";
import { positionWatcher } from "../utils/watchPosition";


export default function useUpdateLocation(){
	const [point, setPoint] = useState(null);

	useEffect(() => {
		if (point) {
			var watcherId = positionWatcher(point, setPoint);
		}

		return function () {
			navigator.geolocation.clearWatch(watcherId)
		}
	}, [point]);
}
