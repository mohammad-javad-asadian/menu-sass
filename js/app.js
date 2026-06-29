"use strict"
const $ = document
const menu = $.querySelectorAll('.nav_list_items')
const subMenu = $.querySelectorAll('.nav_list_items_subList_off')
let bolSubMenu = false

let keyUl = ['home', 'shop', 'category', 'about']
menu.forEach(a => {
    a.addEventListener('click', () => {
        if (keyUl.includes(a.dataset.key) && !bolSubMenu) {
            subMenu.forEach(event => {
                if (event.dataset.key == a.dataset.key) {
                    event.className = "nav_list_items_subList_on"
                    bolSubMenu = true
                    $.body.addEventListener('click', () => {
                        event.className = "nav_list_items_subList_off"
                        bolSubMenu = false
                    }, { capture: true })
                }
            })
        }
    })
})