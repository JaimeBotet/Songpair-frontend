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

function Marker({user}) {
  const long = user.location.coordinates[0]
  const lat = user.location.coordinates[1]
  const { name, avatar, currentSong } = user;

  return (
    <MarkerIcon position={[lat, long]} >
        <Popup>
            <Row className="mb-2">
                <Col xs={1}>
                  <img
                      src={avatar}
                      className="avatar"
                      alt="user avatar"
                  />
                </Col>
                <Col xs={10} className="username-container">
                  <span>{name}</span>
                </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <img
                    src={currentSong.image[0].url}
                    className="album-img"
                    alt="artist album"
                />
              </Col>
              <Col xs={7} className="ml-2">
                <div className="music-title">{currentSong.music}</div>
                <div className="artist-name">{currentSong.artist}</div>
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