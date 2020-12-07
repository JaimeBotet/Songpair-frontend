import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { MapContainer as Map, TileLayer } from "react-leaflet";
import { Container, Row, Col} from "react-bootstrap";

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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => setPoint({lat: pos.coords.latitude, long: pos.coords.longitude}) );
	}, []);

	useEffect(() => {
		if (point) fetchNearPeople(point);
  }, [point, fetchNearPeople]);

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

	return (
		<>
		<Header />
		<Container fluid className="map-page">
			<Row className="map-row">
				<Col xs={12} md={11} lg={11} xl={4}>
					{point && (

					<Map
						className="map-container"
						center={[point.lat, point.long]}
						zoom={100} scrollWheelZoom={false}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Marker lat={point.lat} long={point.long} />
					</Map>
					)}
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default MapView;