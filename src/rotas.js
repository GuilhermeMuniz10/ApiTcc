import clientesController from './controller/ClientesController.js'

export default function adicionarRotas(servidor){
    servidor.use(clientesController);
}