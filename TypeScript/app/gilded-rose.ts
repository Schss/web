export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            var delta:number = 1;

            if(this.items[i].name.includes('Sulfuras', 0)){
                continue;
            }

            if(this.items[i].sellIn == 0){
                delta = delta*2;
            }

            if(this.items[i].name.includes('Aged Brie')){
                delta = -1;
            }

            if(this.items[i].name.includes('Backstage passes')){
                delta = -1;
                
                if(this.items[i].sellIn <= 10){
                    delta = -2;
                }

                if(this.items[i].sellIn <= 5){
                    delta = -3;
                }
            }   
            
            if(this.items[i].name.includes('Conjured')){
                delta = delta*2;
            }

            this.items[i].sellIn = this.items[i].sellIn - 1;
            this.items[i].quality = this.items[i].quality - delta;

            if(this.items[i].quality < 0){
                this.items[i].quality = 0;
            }

            if(this.items[i].quality > 50){
                this.items[i].quality = 50;
            }

        }

        return this.items;
    }
}
