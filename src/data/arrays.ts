import { IFunction } from "../interfaces/IExam";

export const Users: IFunction[]=[
    {
        id: 1,
        name: 'Roberto',
        returnType: 'Hombre',
        detail: 'Hombre ocupado',
        status: 'activo',
        parameters:
        {
            id: 11,
            description: 'parametro',
            type: 'usuario',
            defaultValue: 'caracter',
            functionId: 111,
        }
    },
    {
        id: 2,
        name: 'Clara',
        returnType: 'Mujer',
        detail: 'Mujer trabajdora',
        status: 'activo',
        parameters:
        {
            id: 22,
            description: 'parametro',
            type: 'usuario',
            defaultValue: 'caracter',
            functionId: 222,
        },   
    },
    {
        id: 3,
        name: 'Mauro',
        returnType: 'Hombre',
        detail: 'Hombre Libre',
        status: 'activo',
        parameters:
        {
            id: 33,
            description: 'parametro',
            type: 'usuario',
            defaultValue: 'caracter',
            functionId: 333,
        }
    }
]

// export function findUserById(id:number){
  
//         //Variable usuarioEncontrado guarda al usuario que se encontro
//         const usuarioEncontrado = Users.find((elemento:any)=>{
//             return elemento.id === id;
//         });

//         if(usuarioEncontrado){
//             console.log('Estado Actual '+usuarioEncontrado.name);
//             console.log('Estado Actual '+usuarioEncontrado.status);

//         }
//         if(usuarioEncontrado?.status == 'activo'){
//             usuarioEncontrado.status = 'eliminado';
//             console.log('Estado Modificado '+usuarioEncontrado.status);
//         }
// }




