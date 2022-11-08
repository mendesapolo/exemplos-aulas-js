const http = require('http')
const url = require('url')

const PORT = 8000
const app = http.createServer((request, response) => {
    const query = url.parse(request.url)
    response.setHeader('Content-Type', 'text/html')
    console.log('REQ:: :>> ', request.method);
    if (request.method == 'GET') {
        switch (query.path) {
            case '/':
                response.statusCode = 200
                return response.end('<h1>Home page</h1>')
            case '/tarefas':
                return response.end('<h1>Listar tarefas</h1>')

            default:
                return response.end('<h1>404 page not found</h1>')

        }
    }
    if (request.method == 'POST') {
        switch (query.path) {
            case '/':
                return response.end('<h1>Home page</h1>')
            case '/tarefas':
                return response.end('<h1>Listar tarefas</h1>')

            default:
                response.statusCode = 404
                return response.end('<h1>404 page not found</h1>')

        }
    }
    if (request.method == 'PUT') {
        switch (query.path) {
            case '/':
                return response.end('<h1>Home page PUT METHOD</h1>')
            case '/tarefas':
                return response.end('<h1>Listar tarefas</h1>')

            default:
                return response.end('<h1>404 page not found</h1>')

        }
    }
    if (request.method == 'PATCH') {
        switch (query.path) {
            case '/':
                return response.end('<h1>Home page</h1>')
            case '/tarefas':
                return response.end('<h1>Listar tarefas</h1>')

            default:
                return response.end('<h1>404 page not found</h1>')

        }
    }
    if (request.method == 'DELETE') {
        switch (query.path) {
            case '/':
                return response.end('<h1>Home page</h1>')
            case '/tarefas':
                return response.end('<h1>Listar tarefas</h1>')

            default:
                response.statusCode = 404
                return response.end('<h1>404 page not found</h1>')
                
            }
        }
    response.statusCode = 404
    return response.end('<h1>404 page not found</h1>')
})

app.listen(PORT)