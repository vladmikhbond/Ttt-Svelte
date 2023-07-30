// v - value, c - color
class Model {
    fields = [[{v:' ', c: 'black'},{v:' ', c: 'black'},{v:' ', c: 'black'}],
    [{v:' ', c: 'black'},{v:' ', c: 'black'},{v:' ', c: 'black'}],
    [{v:' ', c: 'black'},{v:' ', c: 'black'},{v:' ', c: 'black'}],];

    currentStep = 'X';
    winner = ' ';

    doStep(i,j) {
        if (this.winner != ' ') 
            return;
        if (this.fields[i][j].v === ' ') {
            this.fields[i][j].v = this.currentStep;
            this.currentStep = this.currentStep == 'X' ? 'O' : 'X'
        }
        this.testWinner()
    }

    testWinner() {
        const tests = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] 
        for (let test of tests) {
            let i0 = test[0] / 3 | 0, j0 = test[0] % 3, a = this.fields[i0][j0];
            let i1 = test[1] / 3 | 0, j1 = test[1] % 3, b = this.fields[i1][j1];
            let i2 = test[2] / 3 | 0, j2 = test[2] % 3, c = this.fields[i2][j2];
        
            if (a.v == b.v && a.v == c.v && a.v != ' ') {
                a.c = b.c = c.c = 'red'
                this.winner = a.v; 
                break
            } 
        }
    }

}

export const model = new Model()