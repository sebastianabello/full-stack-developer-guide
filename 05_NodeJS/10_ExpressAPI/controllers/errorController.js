const error404 = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "La pagina no existe",
  });
};

export default {
  error404,
};
