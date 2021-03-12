$(document).ready(function () {


class Dice {
    newDie: JQuery;
    rollNum: number;
    

    
    constructor() {
        this.newDie = $('<div class="die"></div>');
        this.rollNum = Math.floor((Math.random() * 6) + 1);
        this.newDie.text(this.rollNum)
        this.roll()
        this.reRoll()
        this.remove()
        $('#diceCon').append(this.newDie)

        
    }
    roll() {
        this.newDie.text(this.rollNum);
    }
    reRoll() {
        this.newDie.click(() => {
            this.newDie.text(Math.floor((Math.random() * 6) + 1));
        });
    }
    remove() {
        this.newDie.dblclick(() => {
        this.newDie.remove()
        });
    }


    // $('#butGen').click(() => new Die());
    // $('#rerollBut').click(function() {
    //     Die.this.newDie.text(Math.floor((Math.random() * 6) + 1));

      
    
    // });

}})