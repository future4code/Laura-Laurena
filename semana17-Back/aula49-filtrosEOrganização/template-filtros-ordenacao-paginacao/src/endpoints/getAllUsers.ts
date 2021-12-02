import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

// export async function getAllRecipes(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {
//       const title = req.query.title || "%"
//       const sort = req.query.sort === "title"? "title" : "created_at"
//       const order= req.query.order === "DESC" ?

//       const result = await connection("aula49_recipes")
//          .where("title", "LIKE", `%${title}%`)
//          .orderBy(sort, order)

//       const recipes = result.map(toRecipe)

//       res.status(200).send(recipes)

//    } catch (error) {
//       res.status(500).send("Internal server error")
//    }
// }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      const name = req.query.title || "%"
      const sort = req.query.sort === "name"? "name" : "created_at"
      const type= req.path.type 

      const result = await connection("aula49_exercicio")
         .where("title", "LIKE", `%${name}%`)
         .orderBy(sort, type)

      const recipes = result.map(selectAllUsers)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
   `)

   return result[0]
}

// const toRecipe = (input: any): user => {
//    return {
//       id: input.id,
//       name: input.name,
//       email: input.email,
//       type: input.type,
//    }
// }