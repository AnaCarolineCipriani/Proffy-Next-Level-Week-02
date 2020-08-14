//Servidor 
const express = require('express') //express e um modulo
const server = express()
const {
    pageLanding, 
    pageStudy,
    pageGiveClasses, 
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Inicio e configuracao  do servidor
//configurar arquivos estaticos
server

// receber os dados do req body
.use(express.urlencoded({extended: true }))
//rotas da aplicacao
.use(express.static("public"))
.get("/", pageLanding)      // () => e uma funcao curta  //requisicao e resposta
.get("/study", pageStudy)    //colocacao de rotas   
.get("/give-classes", pageGiveClasses)      
.post('/save-classes', saveClasses)
.listen(5500) //porta, start do servidor

// {} e um objeto
//a funcao express esta retornando um objeto