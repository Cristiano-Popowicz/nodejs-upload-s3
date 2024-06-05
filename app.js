require('dotenv').config();
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Configuração da AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const upload = multer({ dest: 'uploads/' });

// Servir o arquivo index.html na rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
    const fileContent = fs.readFileSync(req.file.path);
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `imagens/${req.file.originalname}`,
        Body: fileContent,
        ContentType: req.file.mimetype,
        ACL: 'public-read'
    };

    s3.upload(params, (err, data) => {
        fs.unlinkSync(req.file.path);

        if (err) {
            return res.status(500).send("Erro ao fazer upload da imagem");
        }
        res.send({ url: data.Location });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
