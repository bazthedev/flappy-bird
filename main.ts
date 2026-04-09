namespace SpriteKind {
    export const Pipe = SpriteKind.create()
    export const Cam = SpriteKind.create()
}

scene.onHitWall(SpriteKind.Player, function(sprite, location) {
    if (gameInProgress) {
        game.gameOver(false)
        gameInProgress = false
    }
})

let speed = 100
let score = 0
let scoreCounter = textsprite.create("0")
scoreCounter.setPosition(80, 20)
scoreCounter.setFlag(SpriteFlag.RelativeToCamera, true)
scoreCounter.scale = 3
scoreCounter.z = 10000
let lock = false
let gameInProgress = false
let playerSprite = sprites.create(assets.image`bird`, SpriteKind.Player)
scene.setBackgroundColor(9)
let cameraSprite = sprites.create(assets.image`noTexture`, SpriteKind.Player)
scene.cameraFollowSprite(cameraSprite)
timer.after(2000, function() {
    playerSprite.ay = 300
    gameInProgress = true
})
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(3, 8))
tiles.placeOnTile(cameraSprite, tiles.getTileLocation(6, 8))
game.setGameOverEffect(false, effects.splatter)

game.onUpdate(function() {
    if (gameInProgress) {
        cameraSprite.y = playerSprite.y
    }
})
forever(function () {
    if (!(gameInProgress)) {
        return
    }
    if (controller.A.isPressed() && !(lock)) {
        playerSprite.vy = -100
        lock = true
        timer.after(150, function () {
            lock = false
        })
    }
})

game.onUpdate(function() {
    if (playerSprite.vy < 0) {
        playerSprite.setImage(assets.image`bird2`)
    } else {
        playerSprite.setImage(assets.image`bird`)
    }
})

let chunkArrays = [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 4, 4, 5, 6, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 4, 4, 5, 6, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 2, 3, 4, 4, 4, 5, 6, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 4, 4, 5, 6, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 4, 4, 5, 6, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]]

game.onUpdateInterval(1000, function() {
    let chunk = chunkArrays.get(randint(0, chunkArrays.length - 1))
    let row = 0
    let index = 0
    for (let t = 0; t < chunk.length; t++) {
        if (chunk[index] == 0) {
            let _pipe = sprites.create(assets.image`pipe3`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(20, row))
        } else if (chunk[index] == 1) {
            let _pipe = sprites.create(assets.image`pipe4`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(21, row))
            row += 1
        } else if (chunk[index] == 2) {
            let _pipe = sprites.create(assets.image`pipe6`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(20, row))
        } else if (chunk[index] == 3) {
            let _pipe = sprites.create(assets.image`pipe5`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(21, row))
            row += 1
        } else if (chunk[index] == 4) {
            row += 1
        } else if (chunk[index] == 5) {
            let _pipe = sprites.create(assets.image`pipe2`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(20, row))
        } else if (chunk[index] == 6) {
            let _pipe = sprites.create(assets.image`pipe1`, SpriteKind.Pipe)
            tiles.placeOnTile(_pipe, tiles.getTileLocation(21, row))
            row += 1
        }
        index += 1
    }
})

sprites.onCreated(SpriteKind.Pipe, function(sprite) {
    sprite.vx = speed * -1
})

scene.onHitWall(SpriteKind.Pipe, function(sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        if (sprite.image.equals(assets.image`pipe2`)) {
            score += 1
            if (score % 10 == 0) {
                speed += 1
            }
        }
        sprites.destroy(sprite)
    }
})

forever(function(){
    if (!gameInProgress) {
        return
    }
    scoreCounter.setText(score.toString())
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Pipe, function(sprite, otherSprite) {
    gameInProgress = false
    game.gameOver(false)
})