import { testIdentificar } from "./Competencias";
describe('Id de boton de acción',()=>{
    test('Debe retornar el valor de prueba dependiendo del valor',()=>{
        //Id del boton que se selecciona
        var boton="btC2"
        //Resultado que guarda el valor del método en ejecución
        const resultado=testIdentificar(boton)
        //Valor que se espera obtener del método
        expect(resultado).toBe("boton1")
    })
})