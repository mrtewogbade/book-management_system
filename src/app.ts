
import express from 'express';
import sequelize from '../database';
import User from './user';

sequelize.sync().then(() => console.log('db is ready'));


// sequelize.sync({ alter: true }).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

// app.post('/users', async (req, res) => {
//   await User.create(req.body);
//   res.send('User is inserted');
// });
app.post('/users', async (req, res) => {
    try {
      await User.create(req.body);
      res.send('User is inserted');
    } catch (error: any) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).send('Username or email is already taken');
      } else {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  });
  

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

const port = 8080;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
