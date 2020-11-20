import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header/Header'
import './Map.scss';
import "leaflet/dist/leaflet.css";

function MapView() {
	return (
		<>
		<Header />
		<Container fluid className="map-page">
			<Row>
				<Col xs={12} md={11} lg={11} xl={4}>
					<Map
						className="map-container"
						center={[41.390205, 2.154007]}
						zoom={100} scrollWheelZoom={false}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
					</Map>
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default MapView;