class Tarefa {

    constructor(titulo = '', descricao) {
        this.titulo = titulo
        this.descricao = descricao
    }

    verDetalhe() {
        console.log('Titulo : ', this.titulo);
        console.log('Descrição : ', this.descricao);
    }
}

module.exports = {
    Tarefa
}