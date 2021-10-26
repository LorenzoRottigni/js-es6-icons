const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const iconsContainer = document.querySelector('main .container-fluid')

function generateIconsGrid(iconsArray, outputContainer, filter){
    outputContainer.textContent = ''
    iconsArray.forEach(element => {
        const newIcon = document.createElement('i')
        const {name, prefix, type, family} = element
        if(type === filter || filter === 'all'){
            const newIconDescription = document.createElement('h4');
            const newIconContainer = document.createElement('div')
            newIcon.classList.add(`${family}`, `${prefix}${name}`, `fs-1`)
            newIconContainer.appendChild(newIcon)
            newIconDescription.textContent = name
            newIconContainer.appendChild(newIconDescription)
            newIconContainer.classList.add('icon-container','rounded-3','shadow')
            switch(type){
                case 'animal':
                    newIconContainer.classList.add('text-danger','border-danger')
                    break
                case 'vegetable':
                    newIconContainer.classList.add('text-secondary','border-secondary')
                    break
                case 'user':
                    newIconContainer.classList.add('text-warning','border-warning')
                    break
            }
            outputContainer.appendChild(newIconContainer)
            }
    });
}

generateIconsGrid(icons, iconsContainer, 'all')

const iconsFilter = document.querySelector('select')

iconsFilter.addEventListener('change', function (){
    console.log(this.value)
    generateIconsGrid(icons, iconsContainer, this.value)
})
