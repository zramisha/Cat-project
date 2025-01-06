import Shelter from "../../models/shelterModel.js";


// Get all shelters (with optional filtering and pagination)
export const getAllShelters = async (req, res) => {
  try {
    const { page = 1, limit = 10, name, owner } = req.query;

    // Query filters
    const filter = {};
    if (name) filter.name = new RegExp(name, "i"); // Case-insensitive search
    if (owner) filter.shelterOwner = owner;

    const shelters = await Shelter.find(filter)
      .populate("shelterOwner", "username email -password")
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Shelter.countDocuments(filter);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      data: shelters,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
