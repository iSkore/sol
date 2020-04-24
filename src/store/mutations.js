export default {
	commitConfig( state, config ) {
		Object.assign( state, config );
	},
	fullPage( state ) {
		state.fullpage = !state.fullpage;

		state.appbar.show   = !state.fullpage;
		state.sidebar.model = !state.fullpage;
	}
};
