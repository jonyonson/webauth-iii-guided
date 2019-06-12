module.exports = role => {
  return function(req, res, next) {
    if (req.user) {
      if (
        req.user.roles &&
        Array.isArray(req.user.roles) &&
        req.user.roles.includes(role)
      ) {
        next();
      } else {
        res.status(403).json({ message: "Can't touch this!" });
      }
    } else {
      res.status(401).json({ message: 'nah' });
    }
  };
};
