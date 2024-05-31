## Projeto foi usado Node js com framework express

- Não esquecer de instalar framework express (npm i express) aportanto para a mesma pasta do projeto
- Instale o mysql(npm i mysql2)
- Para iniciar o projeto é necessario usar comando node src/index no prompt de comando aportanto para a mesma pasta do projeto
- Os arquivos estão com nomes dos integrantes

  ### criar tabela
  CREATE TABLE blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
