import { identificarCalificacion} from "./Formulario";

describe('Obtencion de calificacion de encuesta',()=>{
    test('se espera que al realizar el evento del boton se proceda a retroalimetar al usuario con la calificacion',()=>{
        //Id del boton que se selecciona
        //Resultado que guarda el valor del método en ejecución
        const resultado=identificarCalificacion();
        //Valor que se espera obtener del método
        
        expect(resultado).toBe("Su calificacion es :");
    })
})