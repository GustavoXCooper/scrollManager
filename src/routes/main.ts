import { Router } from 'express'
import { getScrolls, createScroll, deleteScroll } from '../controller/scroll'
import { getSpells } from '../controller/spell'

const router = Router()

router.get('/scrolls', getScrolls)
router.get('/spells', getSpells)

router.post('/scroll', createScroll)
router.post('/delete-scroll', deleteScroll)

export default router
