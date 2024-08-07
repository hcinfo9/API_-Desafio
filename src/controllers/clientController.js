const {
  getAll, create, update, remove, updateStatus
} = require("../services/clientServices")


exports.getAllClient = async (req, res) => {
  try {
    const {search} = req.query

    const client = !search ? await getAll() : await getAll(search);

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Clientes" });
  }
};

exports.createClient = (req, res) => {
  try {
    const {title, description} =req.body
    
    if(!title || !description){
      res.status(400).json({message: "erro Titulo e Descrição são obrigatorios"})
    }

     const client = create(title, description);

    res.status(201).json(client);
    
  } catch (error) {
    res.status(500).json({ error: "Erro ao tentar criar novo Usuario" });
  }
};

exports.updateClient = (req, res) => {
    try {
        const { id } = req.params;
        const {title, description} = req.body;

        if(!title && !description){
          res.status(400).json({message: "Titulo ou descrição é obrigatorio..."})
        }

        const client = update(id, title, description); // Passe o nome da tabela, id e novos dados
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar Cliente" });
    }
}

exports.deleteClient = (req, res) => {
    try {
        const { id } = req.params;
        const client = remove(id); // Passe o nome da tabela e id
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: "Erro ao tentar deletar o cliente" });
    }
}
exports.statusClient = (req, res) => {
    try {
        const { id } = req.params;

        const status  = "Complete";

        const client = updateStatus(id, status); // Passe o nome da tabela, id e status
        res.status(200).json(client);
   
      } catch (error) {
        res.status(500).json({ error: "Erro ao mudar Status" });
    }
};
