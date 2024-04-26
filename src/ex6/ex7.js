// 5

// *****
// *****
// *****
// *****
// *****

const func = (squareSize) => {
    let squareSide = ''

    for(let i = 0; i < squareSize; i++) {
        squareSide+= '*'
    }

    for(let i = 1; i <= squareSide.length; i++ ) {        
        console.log(squareSide)
    }
}

func(3)