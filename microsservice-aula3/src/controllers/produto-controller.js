const repository = require('../repositories/produto-repository')

//p tratar requisição


exports.get = async(rq, res, next) => {
    const data = await repository.get();
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    await repository.create(req.body)
    res.status(201).send({mensagem : "Criado com sucesso!"})
}

exports.put = async(req, res) => {
    const id = req.params.id

    await repository.update(id, req.body)
    res.status(204).send({mensagem: "Atualizado com sucesso"})
}