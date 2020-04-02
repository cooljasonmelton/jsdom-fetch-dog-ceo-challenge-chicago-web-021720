console.log('%c what up', 'color: firebrick')

//challenge 1 dog pics
fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
        return response.json();
})
    .then(function(json){     
        return json.message.forEach(addImageToDogContainer)
});

function addImageToDogContainer(picture){
    const dogContainer = document.getElementById('dog-image-container');
    let img = document.createElement('img');
    img.src = picture;
    img.setAttribute('style', 'max-width: 25%; height: auto;');
    dogContainer.appendChild(img);   
}

//challenge 2 (could def use refactor)
function breedList(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        let dogBreedsUl = document.getElementById('dog-breeds');
        let dogObject = json.message
        let breedDropdown = document.getElementById('breed-dropdown');
        let ddValue = breedDropdown.value
        while (dogBreedsUl.getElementsByTagName('LI').length > 0) {
            dogBreedsUl.removeChild(dogBreedsUl.lastElementChild);
        }          
        
        for (const name in dogObject){
            console.log(name[0])
            if (name[0] == ddValue) {
                let li  = document.createElement('li');
                li.innerHTML = name
                dogBreedsUl.appendChild(li)
                document.addEventListener('DOMContentLoaded', addClickColor(li)) // challenge 3

                if (dogObject[name].length > 0) {
                    ul = document.createElement('ul')
                    li.appendChild(ul)
                    dogObject[name].forEach(addNestedBreed)

                    function addNestedBreed(subName) {
                        newLi = document.createElement('li')
                        newLi.innerHTML = subName
                        ul.appendChild(newLi)
                        document.addEventListener('DOMContentLoaded', addClickColor(newLi)) //challenge 3                    
                    }               
                }
            }
        }
    });
}
// challenge 3

function addClickColor(liItem){
    liItem.addEventListener('click', function() {
        liItem.setAttribute('style', 'color: red;');
    })
}

// challenge 4
function fullDropDownListener(){ 
    document.addEventListener('DOMContentLoaded', addDropDownListener);
    function addDropDownListener(){
        let breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', breedList);
    }
}

function bigWetAss() {
    console.log('big wet ass');
}

fullDropDownListener()



