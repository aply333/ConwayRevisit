
const determine_center = (board) => {
    let width = board[0].length
    let height = board.length
    return [Math.floor(width/2), Math.floor(height/2)]
}

function InsertPreset(board, preset){
    let origin = determine_center(board) 
    let x_delta = origin[0] + preset.x
    let y_delta = origin[1] + preset.y
    for(let y = 0; y< preset.grid.length; y++){
        for(let x = 0; x<preset.grid[y].length; x++){
            console.log("is looping")
            if(preset.grid[y][x] === 0){
                board[y+y_delta][x+x_delta].setDead()
            }else{
                board[y+y_delta][x+x_delta].setLive()
            }
        }
    }
}

export const blinker = {
    x: -2,
    y: -2,
    grid:[
        [1,1,1]
    ]
}

export const block = {
    x:-2,
    y:-2,
    grid:[
        [1,1],
        [1,1]
    ]
}

export const beehive ={
    x: -3,
    y: -2,
    grid:[
        [0,1,1,0],
        [1,0,0,1],
        [0,1,1,0]
    ]
}

export const loaf = {
    x: -2,
    y: -2,
    grid:[
        [0,1,1,0],
        [1,0,0,1],
        [0,1,0,1],
        [0,0,1,0]
    ]
}

export const boat = {
    x: -2,
    y: -2,
    grid:[
        [1,1,0],
        [1,0,1],
        [0,1,0]
    ]
}

export const tub = {
    x: -2,
    y: -2,
    grid:[
        [0,1,0],
        [1,0,1],
        [0,1,0]
    ]
}

export const toad = {
    x: -3,
    y: -2,
    grid:[
        [0,1,1,1],
        [1,1,1,0]
    ]
}

export const beacon = {
    x: -3,
    y: -2,
    grid:[
        [1,1,0,0],
        [1,1,0,0],
        [0,0,1,1],
        [0,0,1,1]
    ]
}

export const pulsar = {
    x: -7,
    y: -7,
    grid:[
        [0,0,1,1,1,0,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [0,0,1,1,1,0,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0,0,1,1,1,0,0],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0,0,1,1,1,0,0]
    ]
}

export const penta = {
    x: -6,
    y: -2,
    grid:[
        [0,0,1,0,0,0,0,1,0,0],
        [1,1,0,1,1,1,1,0,1,1],
        [0,0,1,0,0,0,0,1,0,0]
    ]
}

export const glider = {
    x: -5,
    y: 0,
    grid:[
        [0,1,0],
        [0,0,1],
        [1,1,1]
    ]
}

export const lwship = {
    x:  2,
    y: 0,
    grid:[
        [0,1,0,0,1],
        [1,0,0,0,0],
        [1,0,0,0,1],
        [1,1,1,1,0]
    ]
}

export const mwship = {
    x: 0,
    y: -2,
    grid:[
        [0,0,0,1,0,0],
        [0,1,0,0,0,1],
        [1,0,0,0,0,0],
        [1,0,0,0,0,1],
        [1,1,1,1,1,0]
    ]
}

export const hwship = {
    x: 0,
    y: -3,
    grid:[
        [0,0,0,1,1,0,0],
        [0,1,0,0,0,0,1],
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,1],
        [1,1,1,1,1,1,0]
    ]
}

export default InsertPreset;