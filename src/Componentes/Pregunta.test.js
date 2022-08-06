import { identificarSubidaPregunta} from "./Pregunta";

describe('Subir las preguntas a la base de datos',()=>{
    test('Luego del proceso de ruta y enlace con la base de datos, se espera que la subida de datos sea exitosa',()=>{
        //Id del boton que se selecciona
        //Resultado que guarda el valor del método en ejecución
        const resultado=identificarSubidaPregunta();
        //Valor que se espera obtener del método
        
        expect(resultado).toEqual(true);
    })
})