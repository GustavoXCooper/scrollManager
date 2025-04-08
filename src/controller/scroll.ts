import { getScrolls as getScrollsService,
        createScroll as createScrollService,
        deleteScroll as deleteScrollService
} from "../service/scroll"
import { Request, Response } from "express"

export const getScrolls = async (req: Request, res: Response): Promise<any> => {
    try {
        const scrolls = await getScrollsService()
        return res.json(scrolls)
    } catch (err) {
        console.error(err)
    }
}

export const createScroll = async (req: Request, res: Response) => {
const { name, pm } = req.body
    if(name && pm){
        try {
            const register = await createScrollService(name.trim(), pm)
            res.json({ register })
        } catch (err) {
            console.error(err)
        }
    }
}

export const deleteScroll = (req: Request, res: Response) =>{
    const { name } = req.body;
    try {
        deleteScrollService(name)
        res.json('Scroll excluído')
    } catch (err){
        console.error(err)
    }
}