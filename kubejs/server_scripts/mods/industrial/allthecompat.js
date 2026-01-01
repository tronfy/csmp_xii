ServerEvents.recipes(event => {
    event.custom({ // allthemodium ore através da laser drill
        "type": "industrialforegoing:laser_drill_ore",
        "catalyst": {
        "item": "allthemodium:allthemodium_block"
        },
        "output": {
        "count": 1,
        "item": "allthemodium:allthemodium_slate_ore"
        },
        "rarity": [{
            "biome_filter": {
                "blacklist": [],
                "whitelist": []
            },
            "depth_max": 15,
            "depth_min": 5,
            
            "dimension_filter": {
                "blacklist": [],
                "whitelist": [
                    "minecraft:overworld"
                ]
            },
            
        "weight": 3

        }]
    })

    event.custom({ // vibranium ore através da laser drill
        "type": "industrialforegoing:laser_drill_ore",
        "catalyst": {
        "item": "allthemodium:vibranium_block"
        },
        "output": {
        "count": 1,
        "item": "allthemodium:vibranium_ore"
        },
        "rarity": [{
            "biome_filter": {
                "blacklist": [],
                "whitelist": []
            },
            "depth_max": 15,
            "depth_min": 5,
            
            "dimension_filter": {
                "blacklist": [],
                "whitelist": [
                    "minecraft:the_nether"
                ]
            },
            
        "weight": 2

        }]
    })

    event.custom({ // unobtainium ore através da laser drill
        "type": "industrialforegoing:laser_drill_ore",
        "catalyst": {
        "item": "allthemodium:unobtainium_block"
        },
        "output": {
        "count": 1,
        "item": "allthemodium:unobtainium_ore"
        },
        "rarity": [{
            "biome_filter": {
                "blacklist": [],
                "whitelist": []
            },
            "depth_max": 15,
            "depth_min": 5,
            
            "dimension_filter": {
                "blacklist": [],
                "whitelist": [
                    "minecraft:the_end"
                ]
            },
            
        "weight": 1

        }]
    })
})