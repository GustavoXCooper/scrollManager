import * as fs from 'fs'

const path = './src/model/spell.txt'

export const getSpells = () => {
    const spells = fs.readFileSync(path, 'utf-8')
    const spellList = spells.split('\n').map(line => {
        const [id, level] = line.trim().split(',').map(item => item.trim())
        return {
            id: id,
            pm: Number(level),
            cd: 20 + Number(level)
        }
    })

    return { spells: spellList }
}