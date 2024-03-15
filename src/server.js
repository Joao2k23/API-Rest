import app from './app.js'

const PORT = 3000

//escutar porta
app.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`)
})

