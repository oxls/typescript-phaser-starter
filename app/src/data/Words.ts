export class Words{
    static data:Array<string> = ['bug', 'rug', 'mug', 'thug'];
    static _unique:Array<string> = [];
    static getRandom():string {
        return this.data[Math.floor(Math.random() * this.data.length)];
    };
    static getRandomUnique():string {
        var count: number = 0;

        var word:string = this.getRandom();

        while((this._unique.indexOf(word) != -1) && (count != 100))
        {
            word = this.getRandom();
            count++;
        }

        if(count == 100)
            console.log("Ran out of patience finding a words");
        else
            this._unique.push(word);

        return word;
    }
};
