// src/services/messageService.js
const MessageRepository = require('../repositories/Repository');

class MessageService {
    
  constructor() {
    this.Repository = new MessageRepository();
  }

  async novaPublicacao(novoPost) {
       return await this.Repository.novaPubicacao(novoPost);
  }
 

  
  async getPostById(id) {
     return await this.Repository.getPostById(id);
    
  }

 async listaPublicacao() {
 return await this.Repository.listaPublicacao();
      
}
 

async deletePublicacao(id) {
 return await this.Repository.deletePublicacao(id);
   
}

async updatePublicacao(dadoAtualizar) {
  return await this.Repository.updatePublicacao(dadoAtualizar);
    
 }
 


}

module.exports = MessageService;
