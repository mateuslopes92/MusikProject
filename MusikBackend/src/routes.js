import { Router } from 'express';
import fs from 'fs';

const routes = new Router();

const trackList = [
  {
    id: 1,
    title: 'Vibe',
    artist: 'Matt Flow',
    artwork: 'http://localhost:3000/assets/artworks/Vibe.png',
    filePath: './assets/mp3/Vibe.mp3',
    url: 'http://localhost:3000/assets/mp3/Vibe.mp3',
  },
  {
    id: 2,
    title: 'Mi Vida',
    artist: 'Matt Flow',
    artwork: 'http://localhost:3000/assets/artworks/MiVida.png',
    filePath: './assets/mp3/MiVida.mp3',
    url: 'http://localhost:3000/assets/mp3/MiVida.mp3',
  },
  {
    id: 3,
    title: 'Maior que o teto',
    artist: 'Matt Flow',
    artwork: 'http://localhost:3000/assets/artworks/Maiorqueoteto.png',
    filePath: './assets/mp3/Maiorqueoteto.mp3',
    url: 'http://localhost:3000/assets/mp3/Maiorqueoteto.mp3',
  },
  {
    id: 4,
    title: 'Mercedes Benz',
    artist: 'Matt Flow',
    artwork: 'http://localhost:3000/assets/artworks/Broken.png',
    filePath: './assets/mp3/MercedesBenz.mp3',
    url: 'http://localhost:3000/assets/mp3/MercedesBenz.mp3',
  },
];

// get all tracks
routes.get('/track/:id', function (req, res) {
  console.log(id)
  const id = req.params.id;
  if(id){
    const filePath = trackList.filter(track => track.id === id)[0]?.filePath;
    const fileSize = fs.statSync(filePath).size;
    const range = req.headers.range;

    if(range){
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = (end - start) + 1;

      const fileStream = fs.createReadStream(filePath, {start, end});
      const headers = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'audio/mpeg',
      };

      res.writeHead(206, headers);
      fileStream.pipe(res);
    } else {
      const headers = {
        'Content-Length': fileSize,
        'Content-Type': 'audio/mpeg',
      };

      res.writeHead(206, headers);
      fs.createWriteStream(filePath).pipe(res);
    }
  }
});

// get track by id
routes.get('/all-tracks', function (req, res) {
  return res.json({
    featured: trackList,
    new: trackList,
  });
});

export default routes;