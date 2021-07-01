namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const building = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const textBox = SpriteKind.create()
    export const object = SpriteKind.create()
    export const interactiveObj = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . d 1 c f f f f f f c 1 d . . 
        . . d f f f f f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f d d f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b c f . 
        f f b b b b b b b b b b c f . . 
        . f c c c f f f f f f f d c . . 
        . . . f f f f f f f d 1 1 d . . 
        . . . f f f f f f f d d f . . . 
        . . . . . f d d f f f . . . . . 
        `,img`
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . d 1 c f f f f f f c 1 d . . 
        . . d f f f f f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f d d f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b c f 
        . f c b b b b b b b b b b b b f 
        . . f c b b b b b b b b b b f f 
        . . c d f f f f f f f c c c f . 
        . . d 1 1 d f f f f f f f . . . 
        . . . f d d f f f f f f f . . . 
        . . . . . f f f d d f . . . . . 
        `],
    100,
    true
    )
    lastPose = 1
})
function loadingAnim () {
    game.splash("Loading...")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    if (storage.length > 0) {
        for (let index = 0; index <= storage.length - 1; index++) {
            game.showLongText("You have: " + storage[index], DialogLayout.Bottom)
        }
    } else {
        game.showLongText("You have nothing in storage", DialogLayout.Bottom)
    }
    game.setDialogFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
})
function distanceFunc (num: number, num2: number, num3: number, num4: number) {
    return Math.sqrt((num4 - num3) ** 2 + (num2 - num) ** 2)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f 3 3 f f f f . . . . . . 
        . . f 3 3 3 3 3 f b f f . . . . 
        . . f 3 c 3 3 3 3 3 3 b f . . . 
        . . f c f 3 3 3 3 3 3 3 b f . . 
        . . f c f b b 3 3 3 3 3 3 f . . 
        . f 3 b d d b b d 3 3 3 3 f . . 
        . f 3 3 d d d f f 3 3 3 3 f . . 
        . f 3 d d d f 9 f b b b b f . . 
        . . f d d d f 1 d b b b b f . . 
        . . . f d d d d f b b b b f f . 
        . . . 2 e e e f f f b b b b f . 
        . . . 2 f f f d 1 1 f b b f . . 
        . . 2 f f f f d 1 1 d f f . . . 
        . . f b f f f f d d b f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . . f f d d f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 3 3 f f f f . . . . . . 
        . . f 3 3 3 3 3 f b f f . . . . 
        . . f 3 c 3 3 3 3 3 3 b f . . . 
        . . f c f 3 3 3 3 3 3 3 b f . . 
        . f 3 c f b b 3 3 3 3 3 3 f . . 
        . f 3 b d d b b d 3 3 3 3 f . . 
        . f 3 3 d d d f f 3 3 3 3 f . . 
        . . f d d d f 9 f b b b b f f . 
        . . . d d d f 1 d b b b b b f . 
        . . . f d d d d f b b b b b f . 
        . . . 2 f f f d 1 1 b b b f . . 
        . . 2 f f f f d 1 1 f f f . . . 
        . . 2 f f f f f d d b b f . . . 
        . . f b f f f f f f b f . . . . 
        . . . f f f d d f f f . . . . . 
        `],
    100,
    true
    )
    lastPose = 0
})
function houseTile () {
    hide(HOUSE)
    hide(villager)
    tiles.setTilemap(tilemap`level3`)
    playerLoc = "house"
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 1))
    houseInterior(true)
    portalCD = true
    pause(500)
    portalCD = false
}
function outsideTile () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 3))
    HOUSE.setImage(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `)
    houseInterior(false)
    villager.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    playerLoc = "outside"
    portalCD = true
    pause(500)
    portalCD = false
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f 3 3 f . . . 
        . . . . f f b f 3 3 3 3 3 f . . 
        . . . f b 3 3 3 3 3 3 c 3 f . . 
        . . f b 3 3 3 3 3 3 3 f c f . . 
        . . f 3 3 3 3 3 3 b b f c f . . 
        . . f 3 3 3 3 d b b d d b 3 f . 
        . . f 3 3 3 3 f f d d d 3 b f . 
        . . f b b b b f 9 f d d d b f . 
        . . f b b b b d 1 f d d d f . . 
        . f f b b b b f d d d d f . . . 
        . f b b b b f f f f f f 2 . . . 
        . . f b b f 1 1 d f f f 2 . . . 
        . . . f f d 1 1 d f f f f 2 . . 
        . . . . f b d d b f f f b f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . . f f d d f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 3 3 f . . . 
        . . . . f f b f 3 3 3 3 3 f . . 
        . . . f b 3 3 3 3 3 3 c 3 f . . 
        . . f b 3 3 3 3 3 3 3 f c f . . 
        . . f 3 3 3 3 3 3 b b f c 3 f . 
        . . f 3 3 3 3 d b b d d b 3 f . 
        . . f 3 3 3 3 f f d d d 3 3 f . 
        . f f b b b b f 9 f d d d f . . 
        . f b b b b b d 1 f d d d . . . 
        . f b b b b b f d d d d f . . . 
        . . f b b b 1 1 d f f f 2 . . . 
        . . . f f f 1 1 d f f f 2 . . . 
        . . . f b b d d b b f f f 2 . . 
        . . . . f b f f f f f f b f . . 
        . . . . . f f f d d f f f . . . 
        `],
    100,
    true
    )
    lastPose = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    if (!(portalCD)) {
        if (playerLoc == "outside") {
            houseTile()
            pause(100)
        } else if (playerLoc == "house") {
            outsideTile()
            pause(100)
        }
    }
})
function hide (mySprite: Sprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
function fightWIN () {
    if (storage[0] == "Ramen Packet") {
        game.showLongText("Hey! You already won from me!", DialogLayout.Bottom)
    } else {
        game.showLongText("Congratulations!", DialogLayout.Bottom)
        music.powerUp.play()
        game.showLongText("You've won: 1 Ramen Packet!", DialogLayout.Bottom)
        storage.unshift("Ramen Packet")
    }
}
function rpsCheck () {
    if (playerChoice == "rock" || playerChoice == "Rock" || (playerChoice == "r" || playerChoice == "R")) {
        playerChoiceInt = 1
    } else if (playerChoice == "paper" || playerChoice == "Paper" || (playerChoice == "p" || playerChoice == "P")) {
        playerChoiceInt = 2
    } else if (playerChoice == "scissors" || playerChoice == "Scissors" || (playerChoice == "s" || playerChoice == "S")) {
        playerChoiceInt = 3
    } else {
        game.splash("Sorry, please try again")
        // 0=Retry
        // 1=LOSE (R-P)
        // 2=WIN (R-S)
        // 3=WIN (P-R)
        // 4=LOSE (P-S)
        // 5=LOSE (S-R)
        // 6=WIN (S-P)
        return 0
    }
    if (playerChoiceInt == villChoice) {
        game.showLongText("Tie! Try again!", DialogLayout.Bottom)
        return 0
    } else if (playerChoiceInt == 1 && villChoice == 2) {
        return 1
    } else if (playerChoiceInt == 1 && villChoice == 3) {
        return 2
    } else if (playerChoiceInt == 2 && villChoice == 2) {
        return 3
    } else if (playerChoiceInt == 2 && villChoice == 3) {
        return 4
    } else if (playerChoiceInt == 3 && villChoice == 1) {
        return 5
    } else {
        return 6
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 f f 3 3 f f 3 f . . . 
        . . f b 3 f c f f c f 3 b f . . 
        . . f 3 3 c f b b f c 3 3 f . . 
        . f 3 3 d b b d d b b d 3 3 f . 
        . f 3 3 f f d d d d f f 3 3 f . 
        . f 3 b f 9 f d d f 9 f b 3 f . 
        . f b b d 1 f d d f 1 d b b f . 
        f f b b 3 d d d d d d 3 b b f f 
        f b b 3 3 3 f 2 2 f 3 3 3 b b f 
        . f d d 3 b f f 2 f b 3 d d f . 
        . . d 1 c f f 2 f f f c 1 d . . 
        . . d f f f f f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f d d f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 f f 3 3 f f 3 f . . . 
        . . f b 3 f c f f c f 3 b f . . 
        . f b 3 3 c f b b f c 3 3 b f . 
        . f 3 3 d b b d d b b d 3 3 f . 
        . f b 3 f f d d d d f f 3 b f . 
        f f b b f 9 f d d f 9 f b b f f 
        f b b b d 1 f d d f 1 d b b b f 
        . f b b d d d d d d d f b b f . 
        . . f 1 1 1 d 2 2 f b f d f . . 
        . . f d 1 1 d 2 f f f c 1 d . . 
        . . . f d d 2 f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f f d d f . . . . . 
        `,img`
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 f f 3 3 f f 3 f . . . 
        . . f b 3 f c f f c f 3 b f . . 
        . . f 3 3 c f b b f c 3 3 f . . 
        . f 3 3 d b b d d b b d 3 3 f . 
        . f 3 3 f f d d d d f f 3 3 f . 
        . f 3 b f b f d d f b f b 3 f . 
        . f b b d 1 f d d f 1 d b b f . 
        f f b b f d d d d d d f b b f f 
        f b b f f f f 2 2 f f f f b b f 
        . f d d f b f 2 f f b f d d f . 
        . . d 1 c f f f 2 f f c 1 d . . 
        . . d f f f f f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f b d f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 f f 3 3 f f 3 f . . . 
        . . f b 3 f c f f c f 3 b f . . 
        . f b 3 3 c f b b f c 3 3 b f . 
        . f 3 3 d b b d d b b d 3 3 f . 
        . f b 3 f f d d d d f f 3 b f . 
        f f b b f 9 f d d f 9 f b b f f 
        f b b b d 1 f d d f 1 d b b b f 
        . f b b f d d d d d d d b b f . 
        . . f d f b f 2 2 d 1 1 1 f . . 
        . . d 1 c f f f 2 d 1 1 d f . . 
        . . d f f f f f f 2 d d f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f d d f f f . . . . . 
        `],
    100,
    true
    )
    lastPose = 0
})
function initialCreate () {
    tiles.setTilemap(tilemap`level2`)
    sofa = sprites.create(img`
        ...cccccccccccccccccc...
        ..cbddddddddddddddddbc..
        .cddddddddddddddddddddc.
        .cddbbbbbbbbbbbbbbbbddc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        cbbbccccccccccccccccbbbc
        cddcbddddddddddddddbcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cbdcddddddddddddddddcdbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.object)
    table = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .bddddddddddddddddddddddddddddb.
        cddddddddddddddddddddddddddddddc
        cbbb3ddd33d3dddd3333dddd3d333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbb33dddd3bb33d33dd33ddd33333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cb333dddd3db3dddddddd33333ddd3bc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbbbbbb3333333dddd333d3dddd33bbc
        cddddddddddddddddddddddddddddddc
        cbddddddddddddddddddddddddddddbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        .cccccccccccccccccccccccccccccc.
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.object)
    kitchen = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.interactiveObj)
    mySprite = sprites.create(img`
        . . . . . f f 3 3 f f . . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . f 3 f f 3 3 f f 3 f . . . 
        . . f b 3 f c f f c f 3 b f . . 
        . . f 3 3 c f b b f c 3 3 f . . 
        . f 3 3 d b b d d b b d 3 3 f . 
        . f 3 3 f f d d d d f f 3 3 f . 
        . f 3 b f 9 f d d f 9 f b 3 f . 
        . f b b d 1 f d d f 1 d b b f . 
        f f b b 3 d d d d d d 3 b b f f 
        f b b 3 3 3 d 2 2 d 3 3 3 b b f 
        . f d d 3 b f f 2 f b 3 d d f . 
        . . d 1 c f f 2 f f f c 1 d . . 
        . . d f f f f f f f f f f d . . 
        . . . f f f f f f f f f f . . . 
        . . . . . d d . . d d . . . . . 
        `, SpriteKind.Player)
    HOUSE = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.building)
    villager = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.NPC)
    textBox = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 f 1 f 1 1 f . . . . 
        . . . f 1 1 f f f 1 1 f . . . . 
        . . . f 1 1 f 1 f 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f f 1 1 f f . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.textBox)
    storage = []
    portalCD = false
    playerLoc = "outside"
}
function RPS () {
    villChoice = randint(1, 3)
    pause(100)
    playerChoice = game.askForString("R, P, or S? (Not case sensitive)")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.interactiveObj, function (sprite, otherSprite) {
    if (otherSprite == kitchen) {
        if (storage[0] == "Ramen Packet") {
            playerChoice = game.askForString("Would you like to cook your ramen? (y/n)")
            if (playerChoice == "Y" || (playerChoice == "y" || playerChoice == "yes")) {
                storage[0] = "Ramen"
                game.showLongText("You made Ramen!", DialogLayout.Bottom)
            } else {
                mySprite.x += 7
            }
        }
    }
})
function FIGHT () {
    RPS()
    if (rpsCheck() == 0) {
        FIGHT()
    } else if (rpsCheck() == 1) {
        villager.say("Paper!", 500)
        game.showLongText("Oh no, you lost! Try again!", DialogLayout.Bottom)
    } else if (rpsCheck() == 2) {
        villager.say("Scissors!", 500)
        game.showLongText("Yeah! You won!", DialogLayout.Bottom)
        fightWIN()
    } else if (rpsCheck() == 3) {
        villager.say("Rock!", 500)
        game.showLongText("Yeah! You won!", DialogLayout.Bottom)
        fightWIN()
    } else if (rpsCheck() == 4) {
        villager.say("Paper!", 500)
        game.showLongText("Oh no, you lost! Try again!", DialogLayout.Bottom)
    } else if (rpsCheck() == 5) {
        villager.say("Rock!", 500)
        game.showLongText("Oh no, you lost! Try again!", DialogLayout.Bottom)
    } else {
        villager.say("Paper!", 500)
        game.showLongText("Yeah! You won!", DialogLayout.Bottom)
        fightWIN()
    }
}
function houseInterior (bool: boolean) {
    if (bool) {
        sofa.setImage(img`
            ...cccccccccccccccccc...
            ..cbddddddddddddddddbc..
            .cddddddddddddddddddddc.
            .cddbbbbbbbbbbbbbbbbddc.
            .cdbbbbbbbbbbbbbbbbbbdc.
            .cdbbbbbbbbbbbbbbbbbbdc.
            cbbbccccccccccccccccbbbc
            cddcbddddddddddddddbcddc
            cddcddddddddddddddddcddc
            cddcddddddddddddddddcddc
            cddcddddddddddddddddcddc
            cbdcddddddddddddddddcdbc
            ccbbbbbbbbbbbbbbbbbbbbcc
            ccbbbbbbbbbbbbbbbbbbbbcc
            cccccccccccccccccccccccc
            ..cbbc............cbbc..
            `)
        table.setImage(img`
            ..cccccccccccccccccccccccccccc..
            .bddddddddddddddddddddddddddddb.
            cddddddddddddddddddddddddddddddc
            cbbb3ddd33d3dddd3333dddd3d333bbc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cbb33dddd3bb33d33dd33ddd33333bbc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cb333dddd3db3dddddddd33333ddd3bc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cddddddddddddddddddddddddddddddc
            cbbbbbb3333333dddd333d3dddd33bbc
            cddddddddddddddddddddddddddddddc
            cbddddddddddddddddddddddddddddbc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .cccccccccccccccccccccccccccccc.
            ..cbbc....................cbbc..
            ..c33c....................c33c..
            ...cc......................cc...
            `)
        kitchen.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnTile(sofa, tiles.getTileLocation(10, 1))
        tiles.placeOnTile(table, tiles.getTileLocation(10, 3))
        tiles.placeOnTile(kitchen, tiles.getTileLocation(1, 3))
    } else {
        hide(sofa)
        hide(table)
        hide(kitchen)
    }
}
let talkCD = false
let villChoice = 0
let playerChoiceInt = 0
let playerChoice = ""
let portalCD = false
let playerLoc = ""
let storage: string[] = []
let lastPose = 0
let table: Sprite = null
let sofa: Sprite = null
let kitchen: Sprite = null
let textBox: Sprite = null
let villager: Sprite = null
let mySprite: Sprite = null
let HOUSE: Sprite = null
scene.setBackgroundColor(7)
initialCreate()
tiles.placeOnTile(HOUSE, tiles.getTileLocation(13, 1))
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 10))
tiles.placeOnRandomTile(villager, sprites.castle.tileGrass1)
textBox.setPosition(villager.x - 0.1, villager.y - 13)
scene.cameraFollowSprite(mySprite)
hide(textBox)
hide(kitchen)
hide(sofa)
hide(table)
forever(function () {
	
})
forever(function () {
    music.playMelody("C F G A - A C5 G ", 120)
    music.playMelody("- C A A B C5 G - ", 120)
    music.playMelody("E F E D G - C F ", 120)
    music.playMelody("G A - C A B C5 G ", 120)
    music.playMelody("- E F E D C - - ", 120)
})
forever(function () {
    if (!(controller.left.isPressed()) && !(controller.up.isPressed()) && (!(controller.right.isPressed()) && !(controller.down.isPressed()))) {
        if (lastPose == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . f f 3 3 f f . . . . . 
                . . . . f 3 3 3 3 3 3 f . . . . 
                . . . f 3 f f 3 3 f f 3 f . . . 
                . . f b 3 f c f f c f 3 b f . . 
                . . f 3 3 c f b b f c 3 3 f . . 
                . f 3 3 d b b d d b b d 3 3 f . 
                . f 3 3 f f d d d d f f 3 3 f . 
                . f 3 b f 9 f d d f 9 f b 3 f . 
                . f b b d 1 f d d f 1 d b b f . 
                f f b b 3 d d d d d d 3 b b f f 
                f b b 3 3 3 f 2 2 f 3 3 3 b b f 
                . f d d 3 b f f 2 f b 3 d d f . 
                . . d 1 c f f 2 f f f c 1 d . . 
                . . d f f f f f f f f f f d . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f d d f f . . . . . 
                `],
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . f f 3 3 f f . . . . . 
                . . . . f 3 3 3 3 3 3 f . . . . 
                . . . f 3 3 3 3 3 3 3 3 f . . . 
                . . f b 3 3 3 3 3 3 3 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                . f b 3 3 3 3 3 3 3 3 3 3 b f . 
                . f b b 3 3 3 3 3 3 3 3 b b f . 
                . f b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b c f 
                f b b b b b b b b b b b b b b f 
                . f c c b b b b b b b b c c f . 
                . . d 1 c f f f f f f c 1 d . . 
                . . d f f f f f f f f f f d . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f d d f f . . . . . 
                `],
            100,
            true
            )
        }
    }
})
forever(function () {
    controller.moveSprite(mySprite, 75, 75)
    if (distanceFunc(mySprite.x, villager.x, mySprite.y, villager.y) < 30) {
        if (!(playerLoc == "house")) {
            textBox.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f 1 1 1 1 1 1 1 f . . . . 
                . . . f 1 1 1 f 1 1 1 f . . . . 
                . . . f 1 1 f 1 f 1 1 f . . . . 
                . . . f 1 1 f f f 1 1 f . . . . 
                . . . f 1 1 f 1 f 1 1 f . . . . 
                . . . f 1 1 1 1 1 1 1 f . . . . 
                . . . . f f f 1 1 f f . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            if (controller.A.isPressed() && !(talkCD)) {
                hide(textBox)
                game.showLongText("I challenge you...", DialogLayout.Bottom)
                game.showLongText("...to rock paper scissors!", DialogLayout.Bottom)
                FIGHT()
                talkCD = true
                pause(2000)
                talkCD = false
            }
        }
    } else {
        hide(textBox)
    }
})
