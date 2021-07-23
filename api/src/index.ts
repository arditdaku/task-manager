import express, { Application, Request, Response } from 'express';
import { ListInterface, List } from '../db/models/list.model';
// Boot express
const app: Application = express();
const port = 5000;
// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello World' });
});

/**
 *Get
 * Get all lists
 */
app.get('/lists', (req: Request, res: Response) => {
  List.find({}).then((lists: ListInterface[]) => {
    res.send(lists);
  });
});
/**
 * Post
 * Create a list
 */
app.post('/lists', (req: Request, res: Response) => {});
/**
 * Put
 * Update a list
 */
app.put('/lists/:id', (req: Request, res: Response) => {});
/**
 * Delete
 * Delete a list
 */
app.delete('/lists/:id', (req: Request, res: Response) => {});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
