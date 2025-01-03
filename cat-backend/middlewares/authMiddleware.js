// Auth middleware || NEXT function
import JWT from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    token = token.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
      
    req.user = decoded;
    req.userid = decoded.userid 
    req.username = decoded.username
      
    next();
    
  } catch (error) {
    // next(error)
    console.error("Auth Error:", error.message);
    res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired token",
    });
  }
};

export default authMiddleware;