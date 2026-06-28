"use strict"
const $ = document
const menu = $.querySelectorAll('.nav_list_items')[1]
const subMenu = $.querySelectorAll('.nav_list_items_subList_off')[0]
let bolSubMenu = false
menu.addEventListener('click', () => {

    if (bolSubMenu) {
        subMenu.className = "nav_list_items_subList_off"
        bolSubMenu = false
    } else {
        subMenu.className = "nav_list_items_subList_on"
        bolSubMenu = true
        $.body.addEventListener('click', () => {
            subMenu.className = "nav_list_items_subList_off"
            bolSubMenu = false
        }, { capture: true })
    }
})