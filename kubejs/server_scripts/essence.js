ServerEvents.recipes(event => {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": 'mysticalagradditions:insanium_block'
        },
        "ingredients": [
            {
            "consume": true,
            "ingredient": {
                "item": 'extendedae:fishbig'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'extendedae:mddyue'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'forbidden_arcanus:soul_binding_crystal'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'forbidden_arcanus:eternal_stella'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'amendments:dragon_charge'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'cataclysm:enderite_block'
            }
            },
            {
            "consume": true,
            "ingredient": {
                "item": 'draconicevolution:celestial_manipulator'
            }
            }
        ],
        "result": {
            "count": 1,
            "id": 'mysticalagradditions:creative_essence'
        },
        "techLevel": "draconic",
        "totalEnergy": 256000000
    })
})