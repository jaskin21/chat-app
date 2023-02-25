const bearerTokenMiddleware = (req, res, next) => {
    // Usually JWT passes in Headers Authorization as Bearer Token
    const authorization = req.headers?.authorization;
  
    // Everytime we pass Authorization, it will have the same syntax
    // Authorization: [AUTH-SCHEME] [AUTHORIZATION-PARAMETERS]
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
    // -----
    // In line below, we only want the [AUTHORIZATION-PARAMETERS]
    // or the actual Token
    if (authorization !== undefined) {
      const [, token] = authorization.split(' ');
  
      // By this middleware, we can add a `token` property
      // To pass it to the next middleware
      req.token = token;
    }
  
    next();
  };
  
  export default bearerTokenMiddleware;