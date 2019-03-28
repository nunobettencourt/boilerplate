import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const HeaderBar = () => (
	<AppBar position="sticky" color="secondary">
		<Toolbar>
			<Typography variant="h6" color="inherit">
				tester
			</Typography>
		</Toolbar>
	</AppBar>
);

export default HeaderBar;
