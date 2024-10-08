import con from "./connection.js";

export async function InserirCliente(cliente){
const comando =  `
insert into tb_cliente (nome_cliente , data_nascimento , telefone, cpf, medidas, observacoes , E_Mail)
                        values(?, ?, ?, ?, ?, ?, ? )
                   `      ;
let resposta = await con.query (comando,[cliente.nome_cliente , cliente.data_Nascimento, cliente.telefone, cliente.cpf, cliente.medidas , cliente.observacoes, cliente.E_Mail ])
let info = resposta[0];

return info.insertId;


}


export async function ConsultarCliente(){
const comando = `
select id_Cliente       id,
        nome_cliente    nome,
        data_nascimento data_Nascimento,
        telefone        telefone,
        cpf             cpf,
        medidas         medidas,
        observacoes     observacoes,
        e_mail          email
    from tb_cliente
`;
let resposta = await con.query (comando);
let registros = resposta[0];
return registros;




}


export async function ConsultarClientePorId(id){
    const comando = `
    select id_Cliente       id,
            nome_cliente    nome,
            data_nascimento data_Nascimento,
            telefone        telefone,
            cpf             cpf,
            medidas         medidas,
            observacoes     observacoes,
            e_mail          email
        from tb_cliente
        where id_cliente = ?
    `;
    let resposta = await con.query (comando,[id]);
    let registros = resposta[0];
    return registros;
    
    
    
    
    }


export async function removercliente(id) {
    const comando =`
    delet from_tb_cliente
    where id_cliente = ?
    `
    let resposta = await con.query(comando , [id]);
    let info = resposta[0];

    return info.affectedrows;
}

export async function AlterarCliente(id,cliente){
const comando = `
update tb_cliente  tb_cliente   
set nome_cliente = ? ,
    data_nascimento =?,
    telefone = ?,
    cpf =?,
    medidas=?,
    observacoes =?,
    e_mail =?
    where id_cliente=?;` 
   console.log(cliente) 
    let resposta = await con.query (comando, [cliente.nome, cliente.data_Nascimento, cliente.telefone , cliente.cpf, cliente.medidas , cliente.observacoes, cliente.E_Mail, id])
    let info = resposta [0];
    return info.affectedRows;


}