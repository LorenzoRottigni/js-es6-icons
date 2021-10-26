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
	},
    {
		name: 'accessible-icon',
		prefix: 'fa-',
		type: 'user',
		family: 'fab'
	},
	{
		name: 'air-freshener',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'baby-carriage',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'battle-net',
		prefix: 'fa-',
		type: 'platform',
		family: 'fab'
	},
	{
		name: 'bootstrap',
		prefix: 'fa-',
		type: 'platform',
		family: 'fab'
	},
	{
		name: 'broom',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'book-dead',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'gem',
		prefix: 'fa-',
		type: 'item',
		family: 'far'
	},
	{
		name: 'satellite',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'snowflake',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'poo',
		prefix: 'fa-',
		type: 'item',
		family: 'fas'
	},
	{
		name: 'skiing-nordic',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'street-view',
		prefix: 'fa-',
		type: 'user',
		family: 'fad'
	},
	{
		name: 'user-injured',
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
]

//print all icons value
const PRINT_ALL = 'all'

//container where print
const iconsContainer = document.querySelector('main .container-fluid')

function generateIconsGrid(iconsArray, outputContainer, filter, clearContent){
    //clear old content condition TRUE/FALSE
    if(clearContent)
        outputContainer.textContent = ''
    //for each index of input array
    iconsArray.forEach(element => {
        //create new icon
        const newIcon = document.createElement('i')
        //destructure current index element
        const {name, prefix, type, family} = element
        //print only the type filtered information ('animal','vegetable','user','platform','item','all')
        if(type === filter || filter === PRINT_ALL){
            //create new description tag
            const newIconDescription = document.createElement('h4')
            //create the new icon container
            const newIconContainer = document.createElement('div')
            //add font awesome syntax classes to new icon
            newIcon.classList.add(`${family}`, `${prefix}${name}`, `fs-1`)
            //append new icon to his container
            newIconContainer.appendChild(newIcon)
            //write test in new icon description
            newIconDescription.textContent = name
            //add description to new icon container
            newIconContainer.appendChild(newIconDescription)
            //add classes to new icon container
            newIconContainer.classList.add('icon-container','rounded-3','shadow')
            //add differents text-color border-color
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
                case 'platform':
                    newIconContainer.classList.add('text-success','border-success')
                    break
                case 'item':
                    newIconContainer.classList.add('text-primary','border-primary')
                    break
            }
            //append the newIconContainer to the iconsContainer
            outputContainer.appendChild(newIconContainer)
        }
    })
}

generateIconsGrid(icons, iconsContainer, PRINT_ALL, 1, true)
//queryselectorall x multiple select
const iconsFilter = document.querySelector('select')

iconsFilter.addEventListener('change', function (){
    iconsContainer.textContent = ''
    for (let i = 0; i < this.selectedOptions.length; i++) {
        const element = this.selectedOptions[i]
        generateIconsGrid(icons, iconsContainer, element.value, false)
    }
})
