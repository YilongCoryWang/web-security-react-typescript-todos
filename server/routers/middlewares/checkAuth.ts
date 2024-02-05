const checkAuth = (req, res, next) => {
    if(!req.cookies.authToken || !req.body.authToken || req.cookies.authToken !== req.body.authToken){
        res.sendStatus(401)
        return
    }
    next()
}

export default checkAuth