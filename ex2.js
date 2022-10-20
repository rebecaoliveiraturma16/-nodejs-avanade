import fs from 'fs';

const dir = 'upload';
const file ='lakers.txt';
const path = `${dir}/${file}`;
if (!fs.existsSync(dir)){
    fs.mkdir(dir,(err) => {
        //se der erro, ele vai retornar um erro e vai parar a execução)
        if(err) throw err;
    //se passar do throw ele vai executar o código abaixo.
    console.log('Diretório criado com sucesso');
    });
} else {
    console.log('Acessando o diretório: ${dir}');
}

let msg= "Florescer exige passar por todas as estações da vida";
if (!fs.existsSync(path)){
    fs.writeFile(path, msg, (err) => {
        if(err) throw err;
        console.log('Arquivo ${file} criado com sucesso');
    });
}