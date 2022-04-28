class Food {
    constructor() {
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
    }

    setRandomPosition() {//placer la Food aléatoirement sur la map
        const maxSize = ((GAME_SIZE / this.size) - 1);
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize);
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);
        
    }

    draw() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}