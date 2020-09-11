import React from './node_modules/react';
import Grid from './node_modules/@material-ui/core/Grid';
import { useAuth } from '../../components/Auth/AuthContext';
import PersonalMenu from '../../components/PersonalMenu';

function Profile() {
  const { authTokens } = useAuth();

  /* TODO: fetch logged-in user data in https://github.com/codebuddies/frontend/issues/100 */

  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <PersonalMenu />
      </Grid>
      <Grid item lg={9}>
        <h2>Profile</h2>
        <p>Welcome {authTokens.username}!</p>
      </Grid>
    </Grid>
  );
}

export default Profile;