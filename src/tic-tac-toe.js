class TicTacToe
{
    constructor()
    {
        this.a = 1;
        this.myMatrix = [[null, null, null],
            [null, null, null],
            [null, null, null]];
    }

    getCurrentPlayerSymbol()
    {
        if (this.a % 2 == 0) {
            return 'o';
        }
    else {
            return 'x';
        }
    }

    nextTurn(rowIndex, columnIndex)
    {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.myMatrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.a++;
        }
    }

    isFinished()
    {
        if (this.noMoreTurns() == true || this.getWinner()) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner()
    {
        for (var i = 0; i < 3; ++i) {
            if (this.myMatrix[i][0] == this.myMatrix[i][1] && this.myMatrix[i][0] == this.myMatrix[i][2] && this.myMatrix[i][0] != null) {
                return this.myMatrix[i][0];
            }
            if (this.myMatrix[0][i] == this.myMatrix[1][i] && this.myMatrix[0][i] == this.myMatrix[2][i] && this.myMatrix[0][i] != null) {
                return this.myMatrix[0][i];
            }
        }
        if (this.myMatrix[0][0] == this.myMatrix[1][1] && this.myMatrix[0][0] == this.myMatrix[2][2] && this.myMatrix[0][0] != null) {
            return this.myMatrix[1][1];
        }
        if (this.myMatrix[0][2] == this.myMatrix[1][1] && this.myMatrix[0][2] == this.myMatrix[2][0] && this.myMatrix[0][2] != null) {
            return this.myMatrix[0][2];
        }
        return null;
    }

    noMoreTurns()
    {
        if (this.a <= 9) {
            return false;
        }
        else {
            return true;
        }
    }

    isDraw()
    {
        if (this.noMoreTurns() == true && !this.getWinner()) {
            return true;
        }
        else {
            return false;
        }
    }
    getFieldValue(rowIndex, colIndex)
    {
        return this.myMatrix[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
