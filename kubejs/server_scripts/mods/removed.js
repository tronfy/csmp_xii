ServerEvents.recipes(event => {
    // Para prevenir griefing:
    event.remove({output:'industrialforegoing:infinity_nuke'})

    // COM CERTEZA alguem iria explodir isso aqui
    // Explosão: https://youtu.be/bYGPjRPhmrA?si=V09FIR4vEgORjeGp&t=320 
    event.remove({output:'draconicevolution:reactor_core'})
    event.remove({output:'draconicevolution:reactor_prt_stab_frame'})
    event.remove({output:'draconicevolution:reactor_stabilizer'})
    event.remove({output:'draconicevolution:reactor_injector'})
    event.remove({output:'draconicevolution:reactor_prt_focus_ring'})
    event.remove({output:'draconicevolution:reactor_prt_rotor_full'})
    event.remove({output:'draconicevolution:reactor_prt_out_rotor'})
    event.remove({output:'draconicevolution:reactor_prt_in_rotor'})

    // Algumas seeds do Mystical. Recursos inuteis ou OP
    const seeds = [
        'rubber','silicon','saltpeter','apatite','marble','sculk','brass','sky_stone',
        'constantan', 'ruby', 'sapphire', 'peridot', 'fluix', 'refined_obsidian', 'refined_glowstone',
        'iridium'
    ]
    seeds.forEach(seeds => {
        event.remove({output:`mysticalagriculture:${seeds}_seeds`})
    })
    seeds.forEach(seeds => {
        event.remove({input:`mysticalagriculture:${seeds}_seeds`})
    })
    
})
