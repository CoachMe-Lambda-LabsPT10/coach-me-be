const router = require('express').Router();
const passport = require("passport");
const bcrypt = require("bcrypt"); 
const client_db = require('../../models/client-model');
const coach_db = require('../../models/coach-models');
const httpError = require('http-errors'); 

router.post('/register', require("../../middleware/auth/RegisterErrorHandler")(), async (req, res, next)=>{
    try {
        const {user_type} = req.query;
        const user = await client_db.getUserByEmail(req.body.email, user_type);
        if(user) return res.status(402).json("There is an account associated with your email address. Try logging in.");
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        switch(user_type){
            case 'client':
                await client_db.addClient({
                    ...req.body,
                    password: hashedPassword
                });
                return res.json('success');
            case 'coach':
                await coach_db.addCoach({
                    ...req.body,
                    password: hashedPassword
                })
                return res.json('success');
            default:
                throw new httpError(400, "user_type query value must be provided. (e.g: /auth?user_type='coach'")
        }
    } catch (error) {
        next(error);
    }
});
           
router.post('/login', async (req, res, next) => {
    try {
        req.user_type = req.query.user_type
        if(req.session?.passport?.user) return res.redirect(`/api/client/${req.session.passport.user.id}`);
        passport.authenticate('local', {userProperty: 'email'},
        (err, user, info) => {
            if(!user) return res.json(info.message);
            req.login(user, function(error) {
                if (error) throw error;
                res.json('Login successful');
            });
        })(req, res, next);    
    } catch (error) {
        next(error);
        }
    }
);     
router.post('/logout', async (req, res, next)=>{
    try {
        req.session.destroy();
        return res.json('Logged out successfully.');
        
    } catch (error) {
        next(error);
    }
});


module.exports = router;