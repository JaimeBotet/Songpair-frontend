import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { signInForm } from "../../user/user-actions";

import Signup from "../../../views/auth/Register";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFormData: (code) =>
    dispatch(signInForm(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
