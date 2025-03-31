const peticionApi = () => {
    const url = 'https://rickandmortyapi.com/api/character';

    axios.get(url)
    .then(res => {
        const characters = res.data.results;
        const characterList = document.getElementById('character-list');
        characters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${character.image}" alt="${character.name}" width="50" height="50">
                <span>${character.name}</span>
            `;
            characterList.appendChild(listItem);
        });
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', peticionApi);