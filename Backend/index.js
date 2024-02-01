import express from 'express'
import cors from "cors";
import jwt from 'jsonwebtoken';

//routes
import userRoute from './routes/users.js';
import artistRoute from './routes/artists.js'
import songsRoute from './routes/songs.js'
import commentRoute from './routes/comments.js';
import genreRoute from './routes/genres.js';
import songRoute from './routes/songs.js';
import likeRoute from './routes/likes.js';
import playlistsRoute from './routes/playlists.js';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cors());


app.use('/users', userRoute)
app.use('/comments', commentRoute)
app.use('/genres', genreRoute)
app.use('/likes', likeRoute)
app.use('/songs', songRoute)
app.use('/playlists', playlistsRoute)
app.use('/artist', artistRoute)
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ Wooohooo</h1>')
})
app.use('/artists', artistRoute)
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});