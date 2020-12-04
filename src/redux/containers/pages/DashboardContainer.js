import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { signout } from '../../user/user-actions';

import Dashboard from "../../../views/dashboard/Dashboard";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
