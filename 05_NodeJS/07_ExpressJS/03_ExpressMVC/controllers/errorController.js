const error404 = (req, res) => {
  res.status(404).render("error", {
    title: "Erro 404 not found",
    message: "La pagina no existe",
  });
};

export default {
  error404,
};
