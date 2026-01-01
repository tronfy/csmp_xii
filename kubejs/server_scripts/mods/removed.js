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
})