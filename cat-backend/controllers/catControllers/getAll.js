import Cat from "../../models/catModel.js"


// get all cats list //
export const getAll = async (req, res, next) => {
  try {

    // const cats = await Cat.find().populate({
    //   path: 'shelterOwner',
    //   model: 'User',
    // });

    const cats = await Cat.find();


    res.status(200).send({
      success: true,
      message: "success",
      cats:cats
    });
  } catch (error) {
    next(error);
  }
};