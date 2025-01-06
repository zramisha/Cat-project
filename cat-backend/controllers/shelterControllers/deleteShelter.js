import Shelter from "../../models/shelterModel.js";


// Delete a shelter by ID
export const deleteShelter = async (req, res) => {
  try {
    const { id } = req.params;

    // Ensure only the shelter owner can delete the shelter
    const shelter = await Shelter.findById(id);
    if (!shelter) {
      return res.status(404).json({
        success: false,
        message: "Shelter not found",
      });
    }
      
    console.log(req.user)

    if (String(shelter.shelterOwner) !== String(req.user.userid)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this shelter",
      });
    }

    // Delete shelter
    await Shelter.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Shelter deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
