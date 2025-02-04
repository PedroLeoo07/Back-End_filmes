const { v4: uuid4 } = require("uuid")

class Movie {
    constructor(title, diretor, duration, lancamento) {
        this.id = uuid4()
        this.title = title
        this.diretor = diretor
        this.duration = duration
        this.lancamento = lancamento
    }
}

module.exports = Movie;