ServerEvents.recipes(event => {
    event.remove({ output: 'amendments:dragon_charge' })
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_fluid": {
            "amount": 1000,
            "ingredient": {
            "fluid": 'create_dragons_plus:dragon_breath'
            }
        },
        "input_items": [
            {
            "amount": 1,
            "ingredient": {
                "item": 'mysticalagradditions:dragon_egg_crux'
            }
            },
            {
            "amount": 1,
            "ingredient": {
                "item": 'minecraft:dragon_egg'
            }
            },
            {
            "amount": 1,
            "ingredient": {
                "item": 'occultism:dragonyst_dust'
            }
            },
            {
            "amount": 12,
            "ingredient": {
                "item": 'apothic_enchanting:infused_breath'
            }
            }
        ],
        "output": {
            "count": 1,
            "id": 'amendments:dragon_charge'
        }
    })

    event.remove({ output: 'extendedae:mddyue' })
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
        {
        "item": 'justdirethings:eclipsealloy_block'
        },
        {
        "item": 'ironfurnaces:rainbow_coal'
        },
        {
         "item": 'justdirethings:eclipsealloy_block'
        },
        {
        "tag": 'c:plates/quantum_alloy'
        },
        {
        "tag": 'c:plates/quantum_alloy'
        },
        {
        "item": 'allthecompressed:niotic_crystal_block_2x'
        },
        {
        "item": 'allthecompressed:spirited_crystal_block_2x'
        },
        {
        "item": 'allthecompressed:nitro_crystal_block_2x'
        }
    ],
    "inputFluid": {
        "amount": 1000,
        "fluid": "justdirethings:time_fluid_source"
    },
    "output": {
        "count": 1,
        "id": 'extendedae:mddyue'
    },
    "processingTime": 400
    })
    event.remove({ not: { type: 'draconicevolution:fusion_crafting' }, input: 'extendedae:mddyue' })

    event.remove({ output: 'extendedae:fishbig' })
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
        {
        "item": 'megacells:cell_component_256m'
        },
        {
        "item": 'create_enchantment_industry:super_experience_block'
        },
        {
         "item": 'megacells:cell_component_256m'
        },
        {
        "item": 'create_enchantment_industry:super_experience_block'
        },
        {
        "item": 'create_enchantment_industry:super_experience_block'
        },
        {
        "item": 'megacells:cell_component_256m'
        },
        {
        "item": 'create_enchantment_industry:super_experience_block'
        },
        {
         "item": 'megacells:cell_component_256m'
        }
    ],
    "inputFluid": {
        "amount": 1000,
        "fluid": "integrateddynamics:menril_resin"
    },
    "output": {
        "count": 1,
        "id": 'extendedae:fishbig'
    },
    "processingTime": 400
    })
    event.remove({ not: { type: 'draconicevolution:fusion_crafting' }, input: 'extendedae:fishbig' })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
            "item": 'irons_spellbooks:divine_soulshard'
            },
            {
            "item": 'malum:imitation_heart'
            },
            {
            "item": 'malum:paracausal_flame'
            },
             {
            "item": 'malum:imitation_heart'
            },
            {
            "item": 'cataclysm:void_core'
            },
             {
            "item": 'malum:imitation_heart'
            },
            {
            "item": 'malum:paracausal_flame'
            },
             {
            "item": 'malum:imitation_heart'
            }
        ],
        "reagent": {
            "item": 'minecraft:netherite_block'
        },
        "result": {
            "count": 1,
            "id": 'cataclysm:enderite_block'
        },
        "sourceCost": 5000
    })

    event.remove({ output: 'draconicevolution:celestial_manipulator' })
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "C": {
            "item": 'ars_nouveau:conjuration_essence'
            },
            "L": {
            "item": 'irons_spellbooks:lightning_bottle'
            },
            "S": {
            "item": 'ars_nouveau:summon_focus'
            },
            "J": {
            "item": 'justdirethings:celestigem_block'
            },
            "W": {
                "item": 'enderio:weather_crystal'
            }
        },
        "pattern": [
            " WCW ",
            "WJLJW",
            "CLSLC",
            "WJLJW",
            " WCW "
        ],
        "result": {
            "count": 1,
            "id": 'draconicevolution:celestial_manipulator'
        }
     })
})