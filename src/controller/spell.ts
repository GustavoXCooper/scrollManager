import { getSpells as getSpellsService } from "../service/spells"
import { Request, Response } from "express"

export const getSpells = async (req: Request, res: Response): Promise<any> => {
    try {
        const spells = await getSpellsService()
        return res.json(spells)
    } catch (err) { 
        console.error(err)
    }
}