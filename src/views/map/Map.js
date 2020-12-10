import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { MapContainer as Map, TileLayer, useMap } from "react-leaflet";
import { Container, Row, Col, Spinner} from "react-bootstrap";
import { positionWatcher } from "../../utils/watchPosition";

import Header from "../components/Header/Header";
import Marker from "../components/Marker/Marker";

import ROUTES from "../../utils/routes";

import "./Map.scss";
import "leaflet/dist/leaflet.css";

function MapView({
	currentUserState: { isAuthenticated } = {},
	communityState: { nearPeopleLoading, nearPeopleLoadingError, nearPeopleData } = {},
	fetchNearPeople
}) {
	const [point, setPoint] = useState(null);

	function ChangeView({center}) {
		const map = useMap();
		if (point) {
			map.setView([center.lat, center.long]);
		}
		return null;
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => setPoint({lat: pos.coords.latitude, long: pos.coords.longitude}) );
	}, []);

	useEffect(() => {
		if (point) {
			fetchNearPeople(point);
			var watcher = positionWatcher(point, setPoint);
		}

		return function () {
			navigator.geolocation.clearWatch(watcher)
		}
	}, [point, fetchNearPeople]);

	// Redirect if not logged
	if (!isAuthenticated) {
		return <Redirect to={ROUTES.LOGIN} />;
	}

	return (
		<>
		<Header />
		<Container fluid className="map-page">
			<Row className="map-row text-center">
				<Col xs={12} md={11} lg={11} xl={4}>
					{point && (
						<Map
							className="map-container"
							center={[point.lat, point.long]}
							zoom={100} scrollWheelZoom={false}
						>
							<ChangeView center={point} />
							{ nearPeopleLoading ? (
								<Row className="d-flex align-items-center h-100">
									<Col><Spinner animation="grow" variant="primary"/></Col>
								</Row>
							) : (
								nearPeopleLoadingError ?
								(
									<Row className="d-flex align-items-center h-100">
										<Col><p className="h5">{nearPeopleLoadingError}, please try again.</p></Col>
									</Row>
								) : (
									<>
										<TileLayer
											url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
											attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
										/>
										{nearPeopleData &&
											nearPeopleData.map((user) =>
											<Marker
												key={user.spotifyID}
												user={user}
											/>
										)}
									</>
								)
							)}
						</Map>
					)}
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default MapView;