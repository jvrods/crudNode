const express = require ('express');

const app = express();

app.use(express.json());



const projects = [{
    
    id:"",
    nome:"",
    email:"",
    telefone:""

}]

app.post('/post', (req,res)=>{

    const  {id,nome,email,telefone} = req.body;

    const create = {id, nome,email,telefone};

        projects.push(create)



    return res.send(create);

})

app.get('/', (req,res) => {

 return res.send(projects);


})

app.put('/put/:id',(req,res) => {

        const {id} = req.params;
        const {nome,email,telefone} = req.body;

        const put = {
            id,
            nome,
            email,
            telefone
        };

        projects[id] = put;
        return res.send(put);

});

app.delete('/delete/:id', (req,res)=>{

    const {id} = req.params;

    const projectIndex = projects.findIndex((p)=>p.id == id);

    projects.splice(projectIndex,1);

    return res.send('deletado');



})



app.listen(3000,function(){
    console.log("ta funfando!");
});


