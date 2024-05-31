
const connection = require('../db/config')

class MessageRepository {
  constructor() {
    this.connection =connection
  }


async novaPubicacao(message) {
const sql = 'INSERT INTO blog (title, content, author) VALUES (?, ?, ?)';
const values = [message.title, message.content, message.author];

return new Promise((resolve, reject) => {
this.connection.query(sql, values, (err, result) => {
if (err) {
  console.error('Erro ao salvar a mensagem:', err);
  reject(err);
} else { 
resolve("criada publicação");
  }
  });
});
}


 


async getPostById(id) {

const query = 'SELECT * FROM blog WHERE id = ?';
return new Promise((resolve, reject) => {
this.connection.query(query, id, (error, results) => {
if (error) {
console.error(error);
reject(error);
  } else {
   if (results.length > 0) {
  
   resolve(results[0]);
    
    } else {
    console.log('Publicação não encontrada.');
    resolve(null);  // Retorna null se não encontrar nenhuma publicação com o ID fornecido
    }
        }
        });
    });
}


 
async listaPublicacao() {
const query = 'SELECT * FROM blog';
  
return new Promise((resolve, reject) => {
   this.connection.query(query, (error, results) => {
     if (error) {
        console.error(error);
              reject(error);
       } else {
              if (results.length > 0) {
                  
                  resolve(results); // Retorna todos os resultados
        } else {
       resolve([]);  // Retorna uma lista vazia se não houver publicações
        }
          }
      });
  });
}








async deletePublicacao(id) { 
 const sql = 'DELETE FROM blog WHERE id = ?';
  const values = [id];

  return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
          if (err) {
              console.error('Erro ao deletar a publicação:', err);
              reject(err);
          } else {
              if (result.affectedRows > 0) {
                  resolve('Publicação deletada com sucesso.');
              } else {
                  
                  resolve('Nenhuma publicação encontrada.');
              }
          }
      });
  }); }




  async updatePublicacao(message) {
    const sql = 'UPDATE blog SET title = ?, content = ?, author = ? WHERE id = ?';
    const values = [message.title, message.content, message.author, message.id];

    return new Promise((resolve, reject) => {
        this.connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Erro ao atualizar a publicação:', err);
                reject(err);
            } else {
                if (result.affectedRows > 0) {
                    resolve("Publicação atualizada com suceso");
                } else {
                    
                    resolve(null);
                }
            }
        });
    });
}







}

module.exports = MessageRepository;
