import responseFactory from '../utils/responseFactory.js';
import errorResponseFactory from '../utils/errorResponseFactory.js';

export const userProfile = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    };

    return responseFactory(res, 200, {
      user,
    });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};
