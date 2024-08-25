import express, {Request, Response} from 'express';

const app = express()

app.get('/api/health-checker', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'How to Implement GitHub OAuth in Node.js',
    })
})

const port = 8000
app.listen(port, () => {
    console.log(`✅ Server started on port ${port}`)
})