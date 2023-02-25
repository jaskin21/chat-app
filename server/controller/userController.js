import responseFactory from '../utils/responseFactory.js';

export const userProfile = (req, res) => {
  const { email, id, username } = req.user;

  return responseFactory(res, 200, {
    userInfo: {
      id,
      email,
      username,
    },
  });
};