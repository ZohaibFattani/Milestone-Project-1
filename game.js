// Create the playable character(GOKU)
function newPlayableCharacter(x, y) {
    const element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/GokuStop.webp`
        }
        if (direction === 'west') {
            element.src = `assets/GokuEast.gif`
        }
        if (direction === 'north') {
            element.src = `assets/GokuEast.gif`
        }
        if (direction === 'east') {
            element.src = `assets/GokuEast.gif`
        }
        if (direction === 'south') {
            element.src = `assets/GokuEast.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}
// Create a non-playable character(His Freinds/Family)

//add new images

//add new NPC

// each npc start at different locations and take different routes

//code to move PC with keyboard

//code to stop game if NPC is hit

