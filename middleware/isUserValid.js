function IsUserValid(req,res,next){
    try {
        const {firstName, email} = req.body;
        if (!firstName || !email) {
            throw new Error('Not provided name or email');
        }
        next();
    } catch (e) {
        res.status(400).send(e.message);
    }
}

module.exports = IsUserValid;