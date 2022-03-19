// Autor: Bernardo Nogueira
// Inicio: 02/02/2022
// Codigo escrito em TypeScript --> Passando pra JavaScript atraves de uma template node
// Venom bot + Javascript + NLP + TypeScript + mySql("Futuramente")
// Aprendizagem pelo Nlp (machine_learning)
import { create, Whatsapp } from 'venom-bot';
import { Base } from "./model";
import { connectON, connectOFF } from "./dao/mysql";
import { iBase } from "./interface";
import { Types } from "mysql";

//Inicio do Machine Learning
const { NlpManager } = require("node-nlp");
// manager o celebro
const manager = new NlpManager({ languages: ["pt"], forceNER: true });
{//Ensinando
{//Ensinado de saudação
  manager.addDocument("pt", "bom dia", "SAUDACAO");
  manager.addDocument("pt", "Oi", "SAUDACAO");
  manager.addDocument("pt", "Oioi", "SAUDACAO");
  manager.addDocument("pt", "ola", "SAUDACAO");
  manager.addDocument("pt", "tudo bem", "SAUDACAO");
  manager.addDocument("pt", "boa tarde", "SAUDACAO");
  manager.addDocument("pt", "boa noite", "SAUDACAO");
  manager.addDocument("pt", "quero falar com voces", "SAUDACAO");
  manager.addDocument("pt", "bom dia", "SAUDACAO");
  manager.addDocument("pt", "OI", "SAUDACAO");
}  
{//Ensinado de horario
  manager.addDocument("pt", "Qual horario de funcionamento", "HORARIO");
  manager.addDocument("pt", "Ai funciona ate q horas", "HORARIO");
  manager.addDocument("pt", "fecha q horas", "HORARIO");
  manager.addDocument("pt", "q horas comeca atendimento", "HORARIO");
  manager.addDocument("pt", "quais dias funciona", "HORARIO");
  manager.addDocument("pt", "Esta aberto", "HORARIO");
}
{//Ensinado de Localização
  manager.addDocument("pt", "qual o ponto de referencia", "LOCALIZACAO");
  manager.addDocument("pt", "Aonde localizado", "LOCALIZACAO");
  manager.addDocument("pt", "fica aonde ai", "LOCALIZACAO");
  manager.addDocument("pt", "mapa", "LOCALIZACAO");
  manager.addDocument("pt", "pode me dizer local", "LOCALIZACAO");
  manager.addDocument("pt", "Me mandar a localização de voces do Google maps", +
  "LOCALIZACAO");
}
{//Ensinado de Contato
  manager.addDocument("pt", "Entro em contato", "CONTATO");
  manager.addDocument("pt", "Como posso falar com vc", "CONTATO");
  manager.addDocument("pt", "Qual numero", "CONTATO");
  manager.addDocument("pt", "niguem me atende", "CONTATO");
  manager.addDocument("pt", "atendimento", "CONTATO");
}
{//Ensinar Atendente
  manager.addDocument("pt", "Quero falar com Atendente", "ATENDENTE");
  manager.addDocument("pt", "Atendente", "ATENDENTE");
  manager.addDocument("pt", "Quero falar com Alguem", "ATENDENTE");
}
{//Ensinado Remarca
  manager.addDocument("pt", "remarca", "REMARCA");
  manager.addDocument("pt", "marca", "REMARCA");
  manager.addDocument("pt", "Reagendamento", "REMARCA");
}
{//Ensinado sobre meu criador
  manager.addDocument("pt", "Bernardo", "CRIADOR");
  manager.addDocument("pt", "Bernado", "CRIADOR");
  manager.addDocument("pt", "Quem é seu Criador", "CRIADOR");
  manager.addDocument("pt", "Criador", "CRIADOR");
}
{//Ensinado Sim e Nao
  manager.addDocument("pt", "Sim", "SIM");
  manager.addDocument("pt", "Não", "NAO");
  manager.addDocument("pt", "Nao", "NAO");
}
{//Ensinad
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
}
{//Ensinado 
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
}
{//Ensinado 
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
  manager.addDocument("pt", "", "");
}}
// Treino
  {//Se Manager acha uma op x faça
    {//Saudação
      manager.addAnswer("pt","SAUDACAO", 
      "Oi, tudo bem?👋\nSou Zet, *Assistente Virtual da Unidade CIMEB.*"+
      "\nPara continuar nosso atendimento, pode me explicar sua duvida?\n"+
      "▪️Reagendamento\n▪️Cadastro\n▪️Infusão\n▪️Oftamologia\n▪️Ação Judicial\n▪️Atendente\n");
      manager.addAnswer("pt","SAUDACAO", 
      "Olá, me chamo Zet 🤖\n*Assistente Virtual da Unidade CIMEB.*\nSeja Bem "+
      "Vindo\nPor gentiliza pode me dizer sua duvida?\n▪️Reagendamento\n▪️Cadastro"+
      "\n▪️Infusão\n▪️Oftamologia\n▪️Ação Judicial\n▪️Atendente\n");
}
    {//Localização
    manager.addAnswer("pt","LOCALIZACAO", 
      "*CIMEB* fica localizado:\n"+
      "Av. Laurindo Régis,Engenho Velho de Brotas,\n"+
      "Salvador - BA, 40240-550\nPerto da Antiga Prefeitura Bairro de Brotas"+
      "\nDentro do parque Solar Boa Vista");
}
    { //Contato
    manager.addAnswer("pt","CONTATO", +
      "Pode me dizer qual sua duvida?\n"+
      "▪️Reagendamento\n▪️Cadastro\n▪️Infusão\n"+
      "▪️Oftamologia\n▪️Ação Judicial\n▪️Atendente\n"+
      "Ou voce pode ligar para recepção:\n(71) 3116-4935\n(71) 3117-1645");
}
    {//Criador
      manager.addAnswer("pt","CRIADOR","Meu criador\nBernardo Nogueira,02/02/2022\n");
      manager.addAnswer("pt","CRIADOR","//Bernardo Nogueira");
}
    { //Ensinado sim e nao   
  manager.addAnswer("pt","SIM", "👍👍👍");
  manager.addAnswer("pt","NAO", "Por gentiliza pode me dizer sua duvida?");
}
    {//
      manager.addAnswer("pt","", 
      "");
}
    {//
      manager.addAnswer("pt","", 
      "");
}
    {//
      manager.addAnswer("pt","", 
      "");
}
    {//
      manager.addAnswer("pt","", 
      "");
}}

// Treine e salve o modelo
(async() => {
  await manager.train();
  manager.save();
// Partes para configurar
  const numeroAtendente:string = "557186562022@c.us";

//____________________________________________________
  create("BOT")
  //Caso Bot funcione, ocorra os eventos x
  .then((client) =>{
    //Inicio do evento
    client.onMessage(async(message) => {//Se Client receber uma mensagem
        if (message.isGroupMsg === false) {//Se nao for msg de grupo faça
          const response = await manager.process("pt", message.body);
            if (response.intent === 'None'){
              client.sendText(message.from, "❌❌❌\nDesculpe, mas não consegui processar seu pedido."+
              "\nConsigo entender melhor o que você precisa quando você "+
              "me manda um assunto por vez em frases curtas. 🤓\nPor exemplo:"+
              "\n▪️Reagendamento\n▪️Cadastro\n▪️Infusão\n▪️Oftamologia\n▪️Ação Judicial\n▪️Atendente");
            }  
            else if(response.intent === 'ATENDENTE'){

              client.sendText(numeroAtendente,"Atendimento iniciado")
              client.sendText(message.from,"Pedido foi processado 👍👍\nAguarde um momento, meu colega Humano entrará em contato.⌛")
                await manager.process("pt", message.body);
                  if (message.body === "1" && message.isGroupMsg === false) {
                    client.sendText(message.from, "Welcome Venom 🕷")
                  }
                  else {
                    client.sendText(message.from, "🕷")
                  }
              
            } 
            else if(response.intent === 'REMARCA'){
              client.sendText(message.from,"Agradecemos sua mensagem,🎉\nPode me encaminhar:\n "+
              "▪️Nome completo do paciente;\n ▪️Data de Nascimento;\n "+
              "▪️Qual a preferencia de Turno;\n"+
              "Iremos verificar no sitema uma data próxima para te reagendar.\n\n"+
              "Obrigado pela atenção👍\nAguarde retorno de um de nossos atendentes!"
              );
            } 
            else if(response.intent === ''){
              
              
            } 
            else if(response.intent === ''){
            
            } 
            else if(response.intent === ''){


            }else{
              client.sendText(message.from, response.answer);
            }
            console.log("Intenção:",response.intent);
            console.log("Precisão:",response.score);
            if (response.score <= 0.75) {
              client.sendText(message.from,"Acertei?")
            } else {}
        
    
    
    
    
    
    
    
    
    
    
    
            
        }
      }
    );  })

  .catch((erro) => {
    console.log(erro);
  });
})();