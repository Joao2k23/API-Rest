import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '@Jgmb0485',
    database: 'bd_copa'
})

conexao.connect()

/**
 * executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string = id | [selecao, id]} valores a serem passados ao sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns object da Promise
 */
export const consulta = (sql, valores='', mensagemReject) =>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro,result) => {
            if(erro) return reject(mensagemReject)
            // fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao