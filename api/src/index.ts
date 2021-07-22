import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' });
});

/**
 *Get
 * Get all lists
 */
app.get('/lists', (req: Request, res: Response) => {});
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
