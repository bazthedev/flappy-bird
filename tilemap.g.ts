// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "chunk0":
            case "chunk2":return tiles.createTilemap(hex`080010000000000000000304000000000000030400000000000003040000000000000304000000000000030400000000000003040000000000000304000000000000060500000000000000000000000000000000000000000000000000000000000002010000000000000304000000000000030400000000000003040000000000000304`, img`
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "chunk1":
            case "chunk1":return tiles.createTilemap(hex`080010000000000000000304000000000000030400000000000003040000000000000304000000000000060500000000000000000000000000000000000000000000000000000000000002010000000000000304000000000000030400000000000003040000000000000304000000000000030400000000000003040000000000000304`, img`
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "chunk4":
            case "chunk3":return tiles.createTilemap(hex`080010000000000000000304000000000000030400000000000006050000000000000000000000000000000000000000000000000000000000000201000000000000030400000000000003040000000000000304000000000000030400000000000003040000000000000304000000000000030400000000000003040000000000000304`, img`
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
. . . . . . 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile3":return tile3;
            case "myTile0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile5":return tile5;
            case "myTile2":
            case "tile6":return tile6;
            case "myTile3":
            case "tile7":return tile7;
            case "myTile4":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
