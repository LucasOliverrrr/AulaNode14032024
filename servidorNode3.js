const http = require("http")
const porta = 3001
const host = "127.0.0.1"


const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {"Content-type":"text/html"})
    resposta.write(requisicao.url)
    const p = url.parse(requisicao.url, true).query
    resposta.write(<br/> + p.nome)
    resposta.write(<br/> + p.ra)
    resposta.end()
    })
    servidor.listen(porta, host, ()=>{console.log("Servidor Rodando")})