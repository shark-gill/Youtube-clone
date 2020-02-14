import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "SuTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
