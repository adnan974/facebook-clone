const express = require('express')
const router = express.Router();
const authRouter = require('../routes/auth')
const postRouter = require('../routes/post')
const userRouter = require('../routes/user')

router.use('/',authRouter);
router.use('/posts',postRouter);
router.use('/users',userRouter);

module.exports = router
