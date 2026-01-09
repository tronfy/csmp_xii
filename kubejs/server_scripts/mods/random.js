ServerEvents.recipes(event => {
    event.remove({output:'explorerscompass:explorerscompass'})
    event.shaped(Item.of('explorerscompass:explorerscompass', 1), [
        'ASA',
        'SCS', 
        'ASA'
    ], {
        A: '#c:nuggets/allthemodium',
        C: 'naturescompass:naturescompass',  
        S: 'minecraft:cracked_stone_bricks'
    })

    event.remove({output:'rftoolsbuilder:builder'})
    event.shaped(Item.of('rftoolsbuilder:builder', 1), [
        'APA',
        'DMD', 
        'AFA'
    ], {
        A: '#c:nuggets/allthemodium',
        D: 'rftoolsbase:dimensionalshard',  
        F: 'rftoolsbase:machine_frame',
        M: 'mekanism:digital_miner',
        P: 'minecraft:diamond_pickaxe'
    })
})