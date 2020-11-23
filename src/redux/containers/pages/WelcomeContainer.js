import { connect } from "react-redux";

import {
  songSelector,
  songStateSelector,
} from "../../recipes/recipes-selectors";

import { fetchRecipes } from "../../recipes/recipes-actions";

import Welcome from "../../../views/welcome/Welcome";

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  recipesState: recipesStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
