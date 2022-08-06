import { identificarGraficaEstudiante} from "./EstadisticasEstudiantes";

describe('Obtencion de notas del estudiante',()=>{
    test('se espera que la informacion de las notas del estudiante alojada en la base de datos se vean reflejada en el arreglo notasEstudiante',()=>{
        //Id del boton que se selecciona
        //Resultado que guarda el valor del método en ejecución
        const resultado=identificarGraficaEstudiante();
        //Valor que se espera obtener del método
        
        expect(resultado).toBeGreaterThan(0);
    })
})