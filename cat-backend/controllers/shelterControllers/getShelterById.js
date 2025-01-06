import Shelter from "../../models/shelterModel.js";


// Get a specific shelter by ID
export const getShelterById = async (req, res) => {
  try {
    const { id } = req.params;

    const shelter = await Shelter.findById(id).populate(
      "shelterOwner",
      "username email -password"
    );

    if (!shelter) {
      return res.status(404).json({
        success: false,
        message: "Shelter not found",
      });
    }

    res.status(200).json({
      success: true,
      data: shelter,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
