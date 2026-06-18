const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.use(express.json());

let students = [];

app.post('/students', (req,res)=>{
    students.push(req.body);
    res.json({
        message:'Student Added'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);

app.get('/students', (req, res) => {
    const students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Bob Johnson', age: 19 }
    ];
    res.json(students);
}
);