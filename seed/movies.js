const db = require("../db")
const Movie = require("../models/movie")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const movies = [
    {
      title: "Star Wars",
      year: "1999",
      imdb_rating: 9.9,
      description: "Fighting in space",
      img:
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
    },
    {
      title: "Shrek",
      year: "2000",
      imdb_rating: 9.5,
      description: "A big green orge in a swamp",
      img:
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
    },
    {
      title: "Toy Story",
      year: "1995",
      imdb_rating: 9.8,
      description: "Toys coming to life",
      img:
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
    }
  ]

  await Movie.insertMany(movies)
  console.log("Created movies")
}

const run = async () => {
  await main()
  db.close()
}

run()
