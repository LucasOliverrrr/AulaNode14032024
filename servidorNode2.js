const http = require("http")
const porta = 3001
const host = "127.0.0.1"


const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {"Content-type":"text/html"})
    
    if(requisicao.url == "/"){
        resposta.write("<h1> Seja bem vindo! </h1>")
        }else if(requisicao.url == "/teste1"){
            resposta.write("<h1> Teste 1 <h1/>")
        }else if(requisicao.url == "/teste2"){
            resposta.write("<h1> Teste 2 <h1/>")
        }else if(requisicao.url == "/teste3"){
            resposta.write("<h1> Teste 3 <h1/>")
        }
        resposta.end()
    
    })
    servidor.listen(porta, host, ()=>{console.log("Servidor Rodando")})