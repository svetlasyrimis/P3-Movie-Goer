const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Movie = require("../models/movie")
const db = require("../db")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const SALT_ROUNDS = 11
const TOKEN_KEY = "areallylonggoodkey"

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await new User({
      username,
      email,
      password_digest
    })

    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token })
  } catch (error) {
    console.log(
      "You made it to the signUp controller, but there was an error :("
    )
    return res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      return res.status(201).json({ user, token })
    } else {
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const changePassword = async (req, res) => {}

const createMovie = async (req, res) => {
  try {
    const movie = await new Movie(req.body.movie)
    // movie.user_id=req.body.currentUserId
    await movie.save()
    return res.status(201).json(movie)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

const getAllMovie = async (req, res) => {
  try {
    const movies = await Movie.find()
    return res.status(200).json({ movies })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (movie) {
      return res.status(200).json({ movie })
    }
    return res.status(404).send("Movie with the specified ID does not exists")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    await Movie.findByIdAndUpdate(id, req.body, { new: true }, (err, movie) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!movie) {
        res.status(500).send("Movie not found!")
      }
      return res.status(200).json(movie)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Movie.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Movie deleted")
    }
    throw new Error("Movie not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  createMovie,
  getAllMovie,
  getMovieById,
  updateMovie,
  deleteMovie
}
