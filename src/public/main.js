const sendButton = document.querySelector('.send')
const spellList = document.querySelector('.list-spells')
const listSpell = document.querySelector('#list-spell')
const listScroll = document.querySelector('#list-scroll')

const createSpellDisplay = (name, pm) =>{
    if(name) {
        const liId = name.split(' ').join('-')
        const li = `<li onclick='copySpell("${liId}")'>
                        <p id="${liId}">
                            Name: 
                                <span id="spell-name-${liId}">
                                    ${name} 
                                </span> 
                                | PM: ${pm}
                        </p>
                    </li>`
        return li
    }
    return ' '
}

const copySpell = async (id) => {
    const spanContent = document.querySelector(`#spell-name-${id}`).innerHTML
    await navigator.clipboard.writeText(spanContent.trim())
}

const displaySpells = async () => {     
    try {
        const response = await fetch('/spells', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const result = await response.json()
            const spells = result.spells;
            if(spells != null){
                listSpell.innerHTML = '';
                spells.forEach(spell => {
                    listSpell.innerHTML += createSpellDisplay(spell.id, spell.pm)
                });
                console.log('Resposta do servidor:', result)
            }
        } else {
            console.log('Erro ao enviar os dados:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}

const handleCreateScroll = () => {
    const name = document.querySelector('.spell-name').value;
    const pm = document.querySelector('.level-input').value;

    createScroll(name, pm);
};

const createScroll = async (name, pm) => {
    const data = { name, pm }

    try {
        const response = await fetch('/scroll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json()
            console.log('Resposta do servidor:', result)
        } else {
            console.log('Erro ao enviar os dados:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}

const displayScrolls = async () => {
    try {
        const response = await fetch('/scrolls', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const result = await response.json()
            const scrolls = result.scrolls
            console.log(scrolls)
            listScroll.innerHTML = ''
            scrolls.forEach(scroll => {
                listScroll.innerHTML += createScrollDisplay(scroll.id, scroll.pm, scroll.cd)
            }) 
            console.log('Resposta do servidor:', result)
        } else {
            console.log('Erro ao enviar os dados:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}

const createScrollDisplay = (name, pm, cd) => {
    if(name) {
        const spanClass = name.split(' ').join('-')
        const li = `<li>
                        <p>
                            Name: ${name} | PM: ${pm} | CD: ${cd}
                        </p>
                    </li>
                    <span onclick='deleteScroll("${name}")' class="delete-button" id="delete-button-${spanClass}">
                    delete ${name}
                    </span>`
                    
        return li
    }
    return ' '
}

const deleteScroll = async (name) => {
    const data = { name }
    try {
        const response = await fetch('/delete-scroll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            console.log('Resposta do servidor:', response)
        } else {
            console.log('Erro ao enviar os dados:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}