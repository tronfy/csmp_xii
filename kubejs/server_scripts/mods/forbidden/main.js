ServerEvents.recipes(event => {
    event.shaped(Item.of('forbidden_arcanus:artisan_relic', 1), [
        'SGS',
        'SBS', 
        'SSS'
    ], {
        B: 'create:blaze_burner',
        G: 'forbidden_arcanus:iron_blacksmith_gavel',
        S: '#c:ingots/steel'
    })

    event.shaped(Item.of('forbidden_arcanus:elementarium', 1), [
        ' A ',
        'WOF', 
        ' E '
    ], {
        A: 'mysticalagriculture:air_essence',
        E: 'mysticalagriculture:earth_essence',
        F: 'mysticalagriculture:fire_essence',
        O: 'irons_spellbooks:upgrade_orb',
        W: 'mysticalagriculture:water_essence'
    })

    event.shaped(Item.of('forbidden_arcanus:divine_pact', 1), [
        'DSD',
        'SSS', 
        'DSD'
    ], {
        D: 'irons_spellbooks:divine_pearl',
        S: '#c:ingots/silver'
    })

    event.shapeless(Item.of('forbidden_arcanus:growing_edelwood', 1), [
        'minecraft:oak_sapling',
        'forbidden_arcanus:corrupti_dust'
    ])
})