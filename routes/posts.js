const router = require("express").Router();

const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimelinePost,
} = require("../controllers/posts");

router.post("/", createPost);
router.get("/timeline", getTimelinePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id", getPost);

module.exports = router;
