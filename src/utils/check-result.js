const checkResult = (choice, random) => {
    if(choice === 'paper'){
        if(random === 'rock'){
            return 1
        }

        if(random === 'scissor'){
            return -1
        }

        if(random === 'paper'){
            return 0
        }
    }
    
    if(choice === 'scissor'){
        if(random === 'rock'){
            return -1
        }

        if(random === 'scissor'){
            return 0
        }

        if(random === 'paper'){
            return 1
        }
    }

    if(choice === 'rock'){
        if(random === 'rock'){
            return 0
        }

        if(random === 'scissor'){
            return 1
        }

        if(random === 'paper'){
            return -1
        }
    }
}

export default checkResult;