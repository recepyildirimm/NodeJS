export const adminMiddleware = (req, res, next) => {

    if (req.user && !req.user.isAdmin) {
        return res.status(403).json({
            mesaj: "Erişim engellendi admin değilsin"
        }
        )
    }
    next()
}