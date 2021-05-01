import '../styles/index.scss';

console.log('webpack starterkit');

//importar datos
import {corridasWeb} from './Corridas';


//Funcion Buscar
// nombre default empresa AEF
function Buscar(descripcionServicio,nombre = 'AEF') {
    //filtrar resultados de la busqueda
    const result = corridasWeb.filter(corridasWeb => corridasWeb.descripcionServicio 
        ===descripcionServicio && corridasWeb.empresa === nombre);   
        //Si hay datos relaciones entonces 
        if (result.length > 0){
            // Crear un nuevo objeto con los datos seleccionados
            let nuevo = result.map(result =>{
                let nn ={
                    'Numero corridas': result.numeroCorrida, 
                    'descripcion Servicio': result.descripcionServicio,
                    'empresa': result.empresa,
                    'descripcionEmpresa': result.descripcionEmpresa,                   
                };
                //Obtener si hay descuento
                if (result.listaDescuentos === undefined ){
                        nn['Descuento'] = false;
                }
                else{
                    nn['Descuento'] = true;
                }
            
                return nn;
            });
            
            //Imprime el nuevo objeto con los datos seleccionado
            console.log(nuevo);
            
        }
        //no hay resultados relacionados
        else{
            // Arrojar error
            console.error('NO Encontrado');
        }
    }


// Buscar por descripcion de servicio y empresa. 
Buscar("PRIMERA SELECT","TCH");




