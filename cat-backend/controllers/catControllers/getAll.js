import Cat from "../../models/catModel.js"


// get all cats list //
export const getAll = async (req, res, next) => {
  try {


    const cats = await Cat.find().populate("createdBy", "username email contact -password").exec();


    res.status(200).send({
      success: true,
      message: "success",
      cats:cats
    });
  } catch (error) {
    next(error);
  }
};