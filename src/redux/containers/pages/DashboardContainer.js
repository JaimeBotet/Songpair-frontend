import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";

import Dashboard from "../../../views/dashboard/Dashboard";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

export default connect(mapStateToProps)(Dashboard);
