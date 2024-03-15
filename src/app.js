import express, { request } from 'express' //importando express
import conexao from './app/database/conexao.js' // esta linha não precisa estar aqui por causa do controllers
import selecaoController from './app/controllers/selecaoController.js' //também não precisa, mas vou deixar para conhecimento
import routes from './routes.js'  //importando o arquivo routes que está no mesmo nível de app

const app = express() // criando uma instância do express na constante app

app.use(express.json()) //indicar para o express ler o body como JSON

//usar o router
app.use(routes)

export default app
