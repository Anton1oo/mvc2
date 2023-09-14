import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema(
    {
        Nome:{type: String, require: true},
        Sobremone:{type: String, require: true},
        NomeCompleto:{type: String, require: true},
        Idioma:{type: String, require: true},
        
        Logradouro:{type: String, require: true},
        Nome:{type: String, require: true},
        Nome:{type: String, require: true},
        

    }
)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;