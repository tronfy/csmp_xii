ServerEvents.recipes(event => {
    event.remove({ output: 'mysticalagriculture:infusion_altar' })
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
            "item": "minecraft:stone"
            },
            {
            "item": "minecraft:stone"
            },
            {
            "item": "minecraft:stone"
            },
            {
            "item": "minecraft:stone"
            },
            {
            "tag": "c:ingots/gold"
            },
            {
            "tag": "c:ingots/gold"
            },
            {
            "item": "mysticalagriculture:inferium_essence"
            },
            {
            "item": "mysticalagriculture:inferium_essence"
            }
        ],
        "reagent": {
            "item": "minecraft:red_wool"
        },
        "result": {
            "count": 1,
            "id": "mysticalagriculture:infusion_altar"
        },
        "sourceCost": 100
    })
})