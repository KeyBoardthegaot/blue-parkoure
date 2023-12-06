controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -200
        mySprite.setImage(img`
            9 2 2 9 9 . . . . . . . . . . . 
            9 2 2 9 9 . . . . . . . . . . . 
            9 2 2 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            9 9 9 9 9 . . . . . . . . . . . 
            e . . e . . . . . . . . . . . . 
            e . . e . . . . . . . . . . . . 
            e . . e . . . . . . . . . . . . 
            e e . e e . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    mySprite.vy += -350
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        9 9 9 9 9 . . . . . . . . . . . 
        2 2 2 9 9 . . . . . . . . . . . 
        2 2 2 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        . e . . e . . . . . . . . . . . 
        . e . . e . . . . . . . . . . . 
        . e . . e . . . . . . . . . . . 
        e e . e e . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    mySprite.x += -10
    Level += 1
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 15))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 2 2 2 . . . . . . . . . . . 
        9 9 2 2 2 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        e . . e . . . . . . . . . . . . 
        e . . e . . . . . . . . . . . . 
        e . . e . . . . . . . . . . . . 
        e e . e e . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    mySprite.vy += -250
    statusbar.value += -10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . e e . e e . . . . . . . 
        . . . . e . . e . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 2 2 9 . . . . . . . . 
        . . . . 9 2 2 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(40, 8, StatusBarKind.Health)
statusbar.value = 100
statusbar.max = 100
statusbar.positionDirection(CollisionDirection.Top)
let Level = 1
tiles.setTilemap(tilemap`level10`)
mySprite = sprites.create(img`
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 2 2 2 . . . . . . . . . . . 
    9 9 2 2 2 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    9 9 9 9 9 . . . . . . . . . . . 
    e . . . e . . . . . . . . . . . 
    e . . . e . . . . . . . . . . . 
    e e . . e e . . . . . . . . . . 
    e e . . e e . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 350
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(15)
music.play(music.createSong(hex`005a000408040406001c00010a006400f401640000040000000000000000000000000000000002910000000400012a04000800021e240c001000012710001400021e2a1c002000012224002800012528002c0001242c003000021e2a30003400012538003c0001293c004000012c40004400021e244400480002202948004c00012a5000540002202a58005c0001195c006000011e60006400012968006c0001246c007000011d74007800012978007c0002191e7c008000012a07001c00020a006400f40164000004000000000000000000000000000000000336000400080001220c001000012a10001400011914001800012420002400011b30003400011958005c00012060006400012270007400012508001c000e050046006603320000040a002d0000006400140001320002010002860000000400012504000800012408000c00021b2918001c0002252c20002400012c24002800011e3000340002202c38003c00031922253c004000012240004400021e2944004800012048004c00011e5000540002242a54005800012a58005c00012764006800021d2a68006c0001276c007000012a74007800012478007c00012c7c008000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800ab000000010001030400050002080a08000900010a0c000d0001051400150001091800190001031c001d0001092000210001022800290002020b2c002d000108340035000108380039000202054000410001064400450001094800490001074c004d000202085400550001075800590002030b5c005d0002070b600061000103640065000206096800690001016c006d0001077000710002050b7400750002030578007900010a7c007d000107`), music.PlaybackMode.UntilDone)
music.setVolume(68)
music.setTempo(52)
game.onUpdate(function () {
    if (Level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (Level == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else if (Level == 3) {
        tiles.setTilemap(tilemap`level3`)
    } else if (Level == 4) {
        tiles.setTilemap(tilemap`4`)
    } else if (Level == 5) {
        tiles.setTilemap(tilemap`level5`)
    } else if (Level == 6) {
        tiles.setCurrentTilemap(tilemap`level16`)
    }
})
