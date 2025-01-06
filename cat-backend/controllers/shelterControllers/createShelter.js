import Shelter from "../../models/shelterModel.js";

// Create a new shelter
export const createShelter = async (req, res) => {
  try {
    const { name, location, contactDetails, capacity, description, image } =
      req.body;

      // Ensure the authenticated user is provided as shelterOwner
    const isAuthorized = (req.user.type === "admin") || (req.user.type === "shelterOwner")
    console.log(isAuthorized)
    if (!isAuthorized) {
      return res
        .status(401)
        .json({
          success: false,
          message: "user not authorized to create a shelter",
        });
    }
      
    const shelterOwner = req.user.userid

    // Create a new shelter
    const shelter = await Shelter.create({
      name,
      shelterOwner,
      location,
      contactDetails,
      capacity,
      description,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Shelter created successfully",
      data: shelter,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
