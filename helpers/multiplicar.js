const fs = require('fs');



const CreateFile = async (base = 5,countList=10,list = false) => {

    try {
        
        const nameFile = await generateFile(base,countList,list); 
        return  nameFile;
      
    } catch (error) {
        throw error
    }
  
}

const returnSalida = (base,countList) =>{

        let 
            salida = '',
            console = '',
            arrayOutput = [];
        ;

        for (let i = 1; i <= countList; i++) {
            salida+= `${base} x ${i} = ${base* i}\n`;
            console+= `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base* i}\n`;
        }

        arrayOutput.push(salida);
        arrayOutput.push(console)

    return arrayOutput;
}


const generateFile = (base,countList,list) => {

    const salida = returnSalida(base,countList);

    fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida[0], (err) => {
        if (err) throw err;
    });

    if (list) {
        console.log('====================================='.rainbow);
        console.log(`Tabla del ${base}`.trap.random);
        console.log('====================================='.rainbow);
        console.log(salida[1].bold);
    }
    
    return `tabla-del-${base}`;
}


module.exports = {
    CreateFile
}








