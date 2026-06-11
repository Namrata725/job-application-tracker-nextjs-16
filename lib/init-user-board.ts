import connectDB from "./db";
import { Board, Column } from "./models";


export async function initialozeUserBoard(userId:string) {
    try{
        await connectDB();
        // check if there is already board

        const exsitingBoard = await Board.findOne({userId, name: "Job Hunt"})
        if(exsitingBoard){
            return exsitingBoard;
        }

        // create the board

        const board =await Board.create({
            name: "Job Hunt",
            userId,
            columns:[]
        })

        // create default columns

        
    }
    catch(err){
        throw err;
    }
} 