import Cat from "../../models/catModel.js"


// get cat by id //
export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cat = await Cat.findById(id);
    if (!cat) {
        return res.status(404).json({ success: false, error: 'No such Cat found in the database' });
    }
    res.status(200).json({ success: true, message: 'Cat retrieved successfully', cat: cat });
  } catch (error) {
    next(error);
  }
};