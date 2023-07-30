const express=require('express');
const path=require('path');
const app=express();
const port=80;

app.use('/static',express.static('static'));
app.use('/img',express.static('img'));
// app.use(express.urlencoded);

app.set('view engine', 'pug') ;
app.set('views', path.join(__dirname, 'views')) ;

// endpoints
app.get('/',(req,res)=>{
    res.status(200).render("home.pug");
})

app.get('/contact',(req,res)=>{
    res.status(200).render("contact.pug");
})

app.get('/services',(req,res)=>{
    res.status(200).render("services.pug");
})
app.get('/about',(req,res)=>{
    res.status(200).render("about.pug");
})

app.post('/submit',(req,res)=>{
    console.log('you have submitted the form successfully');
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




