const argv  = require('yargs')
.options({
     'b': {
       alias: 'base',
       demandOption: true,
       type: 'number',
       describe:'Es la base de la tabla de multiplicar'
     },

     'c': {
      alias: 'cantidad',
      demandOption: true,
      default: 10,
      type: 'number',
      describe:'es la cantidad hasta donde se quiere la tabla'
      
     },

     'l': {
         alias: 'lista',
         demandOption: false,
         default: false,
         type: 'boolean',
         describe:'Muestra la tabla en consola'
     }

  })
 .check((argv, options)=>{

    console.log('args',argv );
    if (isNaN(argv.b)) {
          throw 'la base debe ser un numero';  
    }

    if (isNaN(argv.c)) {
      throw 'la cantidad a multiplicar debe ser un numero';  
    }

//     if (typeof argv.l !== "boolean") {
//        throw 'la lista debe ser booleano';  
//     }

    return true;
 })
 .argv;


 module.exports = argv;