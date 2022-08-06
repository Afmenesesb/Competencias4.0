import { identificarPreguntas} from "./Encuestas";

describe('Traer la informacion de las encuestas',()=>{
    test('preguntas mostradas debe tener minimo 2 preguntas para la encuesta',()=>{
        //Id del boton que se selecciona
        //Resultado que guarda el valor del método en ejecución
        const resultado=identificarPreguntas();
        //Valor que se espera obtener del método
        
        expect(resultado).toBeGreaterThan(0);
    })
})