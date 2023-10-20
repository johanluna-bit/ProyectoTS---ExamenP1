//Literal 1 y 2 junto con los 3 arreglos definidos y funcion find
//import { Users, findUserById } from "./data/arrays";
//const mostrarUsuario = findUserById(1);
//console.log(mostrarUsuario);

import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  //Crear Usuario
  const createUser = async ()=>{
    
    const user = await prisma.funtions.create({
      data:{
        id: 1,
        name: 'Roberto',
        returnType: 'Hombre',
        status: true,
        parameters:{
          create:{
            id: 11,
            description: 'parametro',
            type: 'usuario',
            defaultValue: 'caracter',
            functionId: '111',
          } 
        },
     
      }
    })

    

    //muestra el usuario creado
    console.log(user);
    
} 

const updateUser =  async ()=>{
    const user = await prisma.funtions.update({
        where:{
            id:1
        },
        data:{
            status:false
        }
    })
    console.log(user); 
  }

(async ()=>{
    //await createUser();
    // await queryUser();
    await updateUser();
    // await deleteUser();

    })()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })