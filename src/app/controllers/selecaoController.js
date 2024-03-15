import conexao from "../database/conexao.js" //deveria apagar pois o conexão está no repository
import selecaoRepository from "../repositories/selecaoRepository.js"

class SelecaoController{
    // método que vai listar tudo
    async index (req,res) {  
       const resultado = await selecaoRepository.findAll()
       res.json(resultado)
    }
    
    //método que vai listar tudo por ID
    async show(req,res) {
        const id = req.params.id
        const resultado = await selecaoRepository.findById(id)
        res.json(resultado)
    }

    //método que vai criar dados
    async store(req,res) {
        const selecao = req.body
        const resultado = await selecaoRepository.create(selecao)
        res.json(resultado)
    }

    // método que atualiza dados
    async update(req,res) {
        const id = req.params.id
        const selecao = req.body
        const resultado = await selecaoRepository.update(selecao, id)
        res.json(resultado)
    } 

    //método que apagar dados
    async delete(req,res) {
        const id = req.params.id
        const resultado = await selecaoRepository.delete(id)
        res.json(resultado)
    }   

}

//padrão Singleton
export default new SelecaoController()
