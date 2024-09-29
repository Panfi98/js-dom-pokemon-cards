
const pokemList = document.querySelector('.cards')
const bodyElement = document.querySelector('.card-body')

function renderPokemonCards() {
    data.forEach(item => {

        const li = document.createElement('li')
        li.className = 'card'

        const h2 = document.createElement('h2')
        h2.className = 'card--title'
        h2.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1)

        const img = document.createElement('img')
        img.setAttribute('width', '256')
        img.className = 'card--img'
        img.src = item.sprites.other["official-artwork"].front_default

        const ul = document.createElement('ul')
        ul.className = 'card--text'

        const hp = document.createElement('li')
        hp.textContent = `HP: ${item.stats[0].base_stat}`

        const attack = document.createElement('li')
        attack.textContent = `ATTACK: ${item.stats[1].base_stat}`

        const defence = document.createElement('li')
        defence.textContent = `DEFENCE: ${item.stats[2].base_stat}`

        const sAttack = document.createElement('li')
        sAttack.textContent = `SPECIAL-ATTACK: ${item.stats[3].base_stat}`

        const sDefence = document.createElement('li')
        sDefence.textContent = `SPECIAL-DEFENCE: ${item.stats[4].base_stat}`

        const speed = document.createElement('li')
        speed.textContent = `SPEED: ${item.stats[5].base_stat}`

        const divPrime = document.createElement('div');
        divPrime.className = 'divPrime';

        const gamesList = item.game_indices.map((game) => game.version.name);


        const button = document.createElement('button');
        button.className = 'dropbtn';
        button.textContent = "APPEARED IN";


        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-content';
        dropdown.style.display = 'none'; 

        gamesList.forEach(game => {
            const option = document.createElement('a'); 
            option.textContent = game;
            dropdown.appendChild(option);
        });

        
        button.onclick = function () {
            if (dropdown.style.display === 'none') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        };

        divPrime.appendChild(button);
        divPrime.appendChild(dropdown);

        // const dropdownDiv = document.createElement('div');
        // dropdownDiv.id = dropdownId;
        // dropdownDiv.className = 'dropdown-content';

        // divPrime.appendChild(dropdownDiv);

        // item.game_indices.forEach(game => {
        //     const a = document.createElement('a');
        //     a.setAttribute('href', `#${game.name}`);
        //     a.className = 'dropdown-link';
        //     a.textContent = `${game.name}`;
        //     dropdownDiv.appendChild(a);
        // });

        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(ul)

        ul.appendChild(hp)
        ul.appendChild(attack)
        ul.appendChild(defence)
        ul.appendChild(sAttack)
        ul.appendChild(sDefence)
        ul.appendChild(speed)

        ul.appendChild(divPrime);
        pokemList.appendChild(li);
    })
}


renderPokemonCards()