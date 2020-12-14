import { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import useUpdateLocation from "../../hooks/useUpdateLocation"

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { HeartFill, Heart, MusicNoteList, ExclamationTriangleFill } from 'react-bootstrap-icons';
import Header from "../components/Header/Header";

import ROUTES from "../../utils/routes";
import "./Profile.scss";

function Profile({
  currentUserState: { currentUser, isAuthenticated } = {},
  communityState: { profile, loadingProfile, profileError } = {},
  updateUserLocation, getProfile, updateLike
}) {
  const { id } = useParams();

  useUpdateLocation(updateUserLocation);

  useEffect(() => {
		getProfile(id);
  }, [getProfile, id]);

  function handleLike() {
    updateLike(profile.currentSong, id);
    profile.currentSong.like = !profile.currentSong.like;
  }

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <>
      <Header title="Profile" back={ROUTES.MAP} />
      <Container fluid>
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2}}
              lg={{ span: 6, offset: 3}}
              xl={{ span: 4, offset: 4}}
            >
              { (profile && !loadingProfile && !profileError) && (
                <Row className="profile-page fade-in">
                  <Col xs={12} className="avatar">
                    <img src={profile.avatar} alt="user avatar" />
                    <h4>{profile.name}</h4>
                  </Col>
                  <Col xs={11}>
                    <Col xs={12} className="text-center">Currently playing</Col>
                    <Row className="playing">
                      { profile.currentSong ? (
                        <>
                          <Col xs={3}>
                            <img src={profile.currentSong.image[0].url} alt="album" />
                          </Col>
                          <Col xs={6} xl={7} className="music">
                            <div className="music-title">{profile.currentSong.music}</div>
                            <div>{profile.currentSong.artist}</div>
                          </Col>
                          <Col xs={3} xl={2} className="music-actions">
                            <div>
                              { profile.currentSong.like ? (
                                <HeartFill
                                  className="bounce-effect"
                                  role="button"
                                  color="crimson"
                                  onClick={handleLike}
                                />
                                ) : (
                                <Heart
                                  className="bounce-effect"
                                  role="button"
                                  color="crimson"
                                  onClick={handleLike}
                                />
                              )}
                              <span>{ profile.currentSong.totalLikes }</span>
                            </div>
                            <div><MusicNoteList /><span>Add</span></div>
                          </Col>
                        </>
                        ) : (
                          <Col xs={12} className="text-center">No song</Col>
                        )}
                      </Row>
                  </Col>
                  <Col xs={11}>
                    <Row className="status">
                      <Col xs={3} className="total-likes">
                        <Row>
                          <Col xs={12}><h5>Total Likes</h5></Col>
                          <Col xs={12}><HeartFill color="crimson"/></Col>
                          <Col xs={12}>{profile.likes.total}</Col>
                        </Row>
                      </Col>
                      <Col xs={8} className="most-liked">
                        <Row>
                          <Col xs={12}><h5>Most Liked Song</h5></Col>
                          <Col xs={6}>
                            <img src={profile.likes.mostLiked.image[0].url} alt="album" />
                          </Col>
                          <Col xs={6} className="music">
                            <div className="music-title">{profile.likes.mostLiked.music}</div>
                            <div>{profile.likes.mostLiked.artist}</div>
                            <div><HeartFill color="crimson" /><span>{profile.likes.mostLiked.likesCount}</span></div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={11} className="text-white btn btn-primary w-100">
                    Message
                  </Col>
                </Row>
              )}
              { loadingProfile && (
                <Row className="songpair-load">
                  <Col xs={12}><h2>Songpair</h2></Col>
                  <Spinner animation="border" variant="primary" />
                </Row>
              )}
              { profileError && (
                <Row className="songpair-load">
                  <Col xs={12}><h2>User not found :(</h2></Col>
                  <ExclamationTriangleFill />
                </Row>
              )}
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Profile;