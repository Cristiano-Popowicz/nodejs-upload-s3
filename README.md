echo "# Node.js Upload para Amazon S3

Este projeto demonstra como criar uma aplicação Node.js para fazer upload de imagens do computador local para um bucket Amazon S3.

## Configuração

### Dependências

Instale as dependências necessárias:

\`\`\`bash
npm install
\`\`\`

### Configuração da AWS

Crie um arquivo \`.env\` na raiz do projeto com as suas credenciais da AWS:

\`\`\`
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your_bucket_name
\`\`\`

### Executar o Projeto

1. Inicie o servidor Node.js:

\`\`\`bash
node app.js
\`\`\`

2. Abra o navegador e acesse \`http://localhost:3000/\` para ver o formulário de upload de imagem.

## Estrutura do Projeto

- \`app.js\`: Servidor Node.js e rota para upload de imagem.
- \`index.html\`: Formulário HTML para upload de imagem.
- \`.gitignore\`: Lista de arquivos/diretórios ignorados pelo Git.
- \`.env\`: Arquivo de configuração (não incluído no repositório).

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
" > README.md
