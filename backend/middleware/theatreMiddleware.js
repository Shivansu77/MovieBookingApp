const validateTheatreCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Theatre name is required" });
  }
  if (!req.body.description) {
    return res.status(400).json({ error: "Theatre description is required" });
  }
  if (!req.body.city) {
    return res.status(400).json({ error: "Theatre city is required" });
  }
  if (!req.body.address) {
    return res.status(400).json({ error: "Theatre address is required" });
  }
  if (!req.body.pinCode) {
    return res.status(400).json({ error: "Theatre pinCode is required" });
  }
  next();
};

const validateTheatreUpdateRequest = (req, res, next) => {
  const hasValidField = req.body.name || req.body.description || req.body.city ||
                        req.body.address || req.body.pinCode;

  if (!hasValidField) {
    return res.status(400).json({ error: "At least one field is required to update" });
  }
  next();
};

module.exports = {
  validateTheatreCreateRequest,
  validateTheatreUpdateRequest,
};