const express = require("express")
const app = express()

//conexcao com banco de dados
const mysql = require("mysql")
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'user'
  });

  if(connection.connect == true){
    connection.connect(function(err) {
        if (!err) {
          console.log('Conectado!');
        }else
        console.log('Falha ao conectar' + err);
      });
  }else{
      console.log("banco ja conectado")
  }
 

  /*connection.query("select * from usuario",function(erro,res){
      if(!erro){
        console.log("Resultado",res)
      }else{
        console.log("Não foi possivel realizar a consulta",erro)
      }
      
  })
  */
 /*
 connection.query("insert into usuario (name,idade) values('Pedro',50)",function(erro,row){
    if(!erro){
        console.log("Cadastrado com sucesso!",row)
    }else{
        console.log(erro)
    }
 })
 */

 connection.query("update usuario set idade = 25 where name = 'Pedro'", function(erro,row){
    if(!erro){
        console.log("Atualizado com sucesso")
    }else{
        console.log(erro)
    }
 })

app.get("/sobre",function(req,res){
    res.send("Bem vindo a pagina sobre")
})
app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html")
})

app.listen(8080)