const express = require('express');
const {userService} = require("./services/user.service");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// // клієнт забирає інфу з беку
// app.get('/users',(req,res)=>{
//
//     console.log(req.params);
//
//     console.log(req.query);
//
//     res.end('Hello from get');
// })

app.post('/users', async (req, res) => {
    const user = req.body;

    const data = await userService.create(user);
    res.json(data);
})

app.get('/users', async (req, res) => {
    const data = await userService.getAll();
    res.json(data);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const data = await userService.getById(id);
    res.json(data);
})

app.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const user = req.body;
    const data = await userService.updateById(id, user);
    res.json(data);
})

app.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    const data = await userService.deleteById(id);
    res.json(data);
})


//
// // клієнт щось записує в бек
// app.post('/users',(req,res)=>{
//
//     console.log(req.body);  // дістаєи що передав клієнт
//
//     res.end('Hello from post');
// })
//
// // оновлює частково
// app.patch('/users',(req,res)=>{
//     res.end('Hello from patch');
// })
//
// //клієнт оновлює повністю 1 обєкт
// app.put('/users',(req,res)=>{
//     res.end('Hello from put');
// })
//
// // видалення сутності
// app.delete('/users',(req,res)=>{
//     res.end('Hello from delete');
// })

app.listen(5000, () => {
    console.log("Server started on port 5000...");
})