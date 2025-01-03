import Cat from "../../models/catModel.js"


// Create Cat Profile controller ...//
export const createCatProfile = async (req, res, next) => {
  try {
      
    if (!req.user) {
      return res.status(400).send({
        success: false,
        message: "User not authorized"
      })
    }
    const { name, age, breed, description, image, healthStatus } = req.body;
    const createdBy = req.user.userid;
    //validate
    if (!name) {
      next("cat name is required");
    }
    if (!age) {
      next("age is required");
    }
    if (!breed) {
      next("breed is required");
    }




    const newCat = await Cat.create({ name, age, breed, description, image, healthStatus, createdBy });

    return res.status(201).send({
      success: true,
      message: "Cat Profile Created successfully",
      catInfo: newCat,
    });
  } catch (error) {
    next(error);
  }
};