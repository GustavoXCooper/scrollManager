import * as fs from 'fs'

const path = './src/model/scroll.txt'

export const getScrolls = async () => {
    const scrolls = fs.readFileSync(path, 'utf-8')
    const scrollsList = scrolls.split('\n').map(line => {
        const [id, level] = line.trim().split(',').map(item => item.trim())
        return {
            id: id,
            pm: Number(level),
            cd: 20 + Number(level)
        }
    })

    return { scrolls: scrollsList }
}

export const createScroll = async (name: String, pm: Number) => {
    const register = `\n${name}, ${pm}`;
    fs.appendFileSync(path, register, 'utf-8');

    return register;
}