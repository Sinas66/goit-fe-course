import React from 'react';
import PropTypes from 'prop-types';

const NewUser = ({ userCreated }) => {
  if (!userCreated) return null;
  console.log(userCreated);

  return (
    <div>
      <p>{userCreated.username}</p>
    </div>
  );
};

export default NewUser;

NewUser.propTypes = {
  userCreated: PropTypes.shape({}).isRequired,
};
