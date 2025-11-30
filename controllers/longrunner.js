// GET - landing
module.exports.landing = (req, res) => {
  res.render("longrunner/landing", {
    title: "longrunner apps",
    page: "longrunnerLanding",
  });
};
