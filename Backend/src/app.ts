import express, { Request, Response } from 'express';
import knex, { Knex } from 'knex';
import { config as dotenvConfig } from 'dotenv';
import * as path from 'path';
import knexConfig from '../knexfile';


dotenvConfig({ path: path.resolve(__dirname, '../../.env') });

const app = express();
export default app;

const port = process.env.PORT || 8080;

const db: Knex = knex(knexConfig[process.env.NODE_ENV || 'development']);

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('My API is up and running!');
});

app.get('/users', async (req: Request, res: Response) => {
  try {
      const data = await db('example_table').select('*');
      res.status(200).json(data);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
