const router = require("express").Router();

const {
  updateUser,
  deleteUser,
  findUser,
  followUser,
  unfollowUser,
} = require("../controllers/users");

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", findUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);

module.exports = router;
