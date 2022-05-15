import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import LocalStratergy from 'passport-local';
import passport from 'passport';
import PassportLocalMongoose from 'passport-local-mongoose';
import expressSession from 'express-session';
import bodyParser from 'body-parser';

dotenv.config();
mongoose.connect(process.env.DB_URL);

// todo schema to store a single todo
const TodoSchema = new mongoose.Schema({
    title: String,
    detail: String,
    date: Date
});
const Todo = mongoose.model('Todo', TodoSchema);

// user todo list schema to store multiple todos 
const TodoListSchema = new mongoose.Schema({
    name: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Todo
    }]
});
const TodoList = mongoose.model('TodoList', TodoListSchema);


// user schema to store multiple todolists
const UserSchema = new mongoose.Schema({
    uname: String,
    username: String,
    password: String,
    // user todos to store multiple todo lists
    UserTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: TodoList
    }]
})
UserSchema.plugin(PassportLocalMongoose);
const User = mongoose.model('User', UserSchema);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(expressSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function (req, res) {
    res.send("hello world")
})

// add new user
app.post('/user', function (req, res) {
    const uname = req.body.uuname;
    const username = req.body.username;
    const password = req.body.pass;
    User.register(new User({ username: username, uname: uname }), password, function (error) {
        if (error) console.log(error);
        else res.send({ status: 'success' });
    });
})

// login functionality
app.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }), function (req, res) {
    res.status(200).send({user:req.user});
});

// get todos route
app.get('/todos',isLoggedIn, function (req, res) {
    User.findById(req.user._id).populate({path:'UserTodos',populate:{
        path:'todos',
        model:'Todo'
    }}).then(function(User){
        res.send(User.UserTodos);
    })
})

// add todolist
app.post('/todolist',isLoggedIn, function(req,res){
    let newTodoList = new TodoList({name : req.body.todoListName});
    newTodoList.save(function(err, TodoList){
        if(err) res.send({message: "Internal Server Error"});
        else{
            User.findById(req.user._id,function(err, User){
                if(err) res.send({error:"error saving data"});
                else{
                    if(!User.UserTodos)
                        User.UserTodos = [TodoList._id];
                    else
                        User.UserTodos.push(TodoList._id);
                    User.save(function(error,User){
                        console.log(User)
                    })
                }
            })
        }
    })
})

// add todo to todolist
app.post('/todo',isLoggedIn, function(req,res){
    let newTodo = new Todo({title: req.body.title, detail: req.body.detail || "", date:req.body.date || ""});
    newTodo.save(function(err, todo){
        if(err) res.send({message: "Internal Server Error"});
        else{
            TodoList.findById(mongoose.Types.ObjectId(req.body.todolistid), function(err, todoList){
                if(err) res.send({error:"error saving data"});
                else{
                    if(!todoList.todos)
                        todoList.todos = [todo._id];
                    else
                        todoList.todos.push(todo._id);
                    todoList.save(function(error,todol){
                        console.log(todol);
                    })
                }
            })
        }
    })
})

// function is logged id
function isLoggedIn(req, res, next) {
    if (req.user)
        next();
    else
        res.status(401).send({message: 'Unauthorised'});
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, function (err) {
    if (err) console.log(err)
    else console.log(`app started successfully at ${PORT}`)
})
