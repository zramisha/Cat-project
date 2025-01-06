import Shelter from "../../models/shelterModel.js";


// Update a shelter by ID
export const updateShelter = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Ensure only the shelter owner can update the shelter
    const shelter = await Shelter.findById(id);
    if (!shelter) {
      return res.status(404).json({
        success: false,
        message: "Shelter not found",
      });
    }

    if (String(shelter.shelterOwner) !== String(req.user.userid)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this shelter",
      });
    }

    // Update shelter
    const updatedShelter = await Shelter.findByIdAndUpdate(id, updates, {
      new: true,
    }).populate("shelterOwner", "username email -password");

    res.status(200).json({
      success: true,
      message: "Shelter updated successfully",
      data: updatedShelter,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};