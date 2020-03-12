const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()
const restrict = require("../helpers")

router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.post("/change-password", controllers.changePassword)

router.get("/", (req, res) => res.send("This is root!"))
router.post("/items", controllers.createMovie)
router.get("/movies", controllers.getAllMovie)
router.get("/movies/:id", controllers.getMovieById)
router.put("/movies/:id", controllers.updateMovie)
router.delete("/movies/:id", controllers.deleteMovie)
router.get('/verify',controllers.verifyUser)



module.exports = router
