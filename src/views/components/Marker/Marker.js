import {Row, Col} from 'react-bootstrap';
import { Marker as MarkerIcon, Popup } from 'react-leaflet';
import { HeartFill } from 'react-bootstrap-icons'
import L from 'leaflet';
import icon from '../../../assets/map/marker.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl:      icon,
    shadowUrl:    iconShadow,
    iconSize:     [62, 62],
    iconAnchor:   [31, 52],
    shadowAnchor: [12, 40],
    popupAnchor:  [0, -45]
});

L.Marker.prototype.options.icon = DefaultIcon;

function Marker(props) {
    const {lat, long} = props
    return (
      <MarkerIcon position={[lat, long]} >
          <Popup>
              <Row className="mb-2">
                  <Col xs={1}>
                    <img
                        src="https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1"
                        className="avatar"
                        alt="user avatar"
                    />
                  </Col>
                  <Col xs={5} className="username-container">
                    <h5>Jazzier</h5>
                  </Col>
              </Row>
              <Row>
                  <Col xs={2}>
                    <img
                        src="https://developer.spotify.com/assets/branding-guidelines/albumArt1@2x.png"
                        className="album-img"
                        alt="artist album"
                    />
                  </Col>
                  <Col xs={7} className="ml-2">
                    <div className="music-title">Another Day Of Sun</div>
                    <div className="artist-name">La La Land</div>
                  </Col>
                  <Col xs={2}>
                        <HeartFill
                            size={20}
                            color="crimson"
                            className="like-icon"
                        />
                  </Col>
              </Row>
          </Popup>
      </MarkerIcon>
    );
  }

export default Marker;