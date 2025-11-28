const router = require('express').Router();

router.get("/getblogs", (req, res) => {
    const blogs = [
        {
            id: 1,
            title: "Welcome to the Blog",
            content: "This is your first blog post.",
            author: "Admin"
        }
    ];

    res.json({
        success: true,
        message: "Blogs fetched successfully",
        blogs
    });
});

module.exports = router;
