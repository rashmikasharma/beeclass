const router = require('express').Router();


router.get("/getblogs", (req, res) => {
    res.json({
        success: true,
        message: "Blogs fetched successfully",
        blogs: []
    })
});
module.exports = router;