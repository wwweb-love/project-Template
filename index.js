
// Блоки меню полей 
const headerCatalogDelivery = document.querySelector('.menu-items--catalog');
const headerMarkTechnic = document.querySelector('.menu-items--mark');
const headerAbout = document.querySelector('.menu-items--about');
const headerPrice = document.querySelector('.menu-items--price');
const headerDelivery = document.querySelector('.menu-items--delivery');
const headerContacts = document.querySelector('.menu-items--contacts');

// Стрелочки в блоках полей меню 
const headerElArrowsMenu = document.querySelectorAll('.header-arrows-menu')

// Названия меню полей 
const headerCatalogDeliveryName = document.querySelector('.menu-items--catalog--name--text');
const headerMarkTechnicName = document.querySelector('.menu-items--mark--name--text');
const headerAboutName = document.querySelector('.menu-items--about--name--text');
const headerPriceName = document.querySelector('.menu-items--price--name');
const headerDeliveryName = document.querySelector('.menu-items--delivery--name');
const headerContactsName = document.querySelector('.menu-items--contacts--name');

// Списки высплывающих меню 
const headerCatalogDeliveryListMenu = document.querySelector('.menu-items--catalog--list')
const headerMarkTechnicListMenu = document.querySelector('.menu-items--mark--list')
const headerAboutListMenu = document.querySelector('.menu-items--about--list')

// Елементы списков всплывающих меню 

// Элементы списка Catalog 
const headerCatalogDeliveryListItem = document.querySelectorAll('.menu-items--catalog--list--item')
// Элементы списка Mark
const headerMarkTechnicListItem = document.querySelectorAll('.menu-items--mark--list--item')
// Элементы списка About 
const headerAboutListItem = document.querySelectorAll('.menu-items--about--list--item')


// Input в serach
const searchInp = document.querySelector('.seacrh-items--input')

// Icon в search 
const searchIcon = document.querySelector('.seacrh-icon')

// Burger mobile 
const burgerMobile = document.querySelector('.burger')
const burgerMobileList = document.querySelector('.burger--list')


// Меню 
// Элементы меню 
const elements = [headerCatalogDelivery, headerMarkTechnic, 
    headerAbout, headerPrice, headerDelivery, headerContacts]

// Названия элементов меню 
const elementsName = [headerCatalogDeliveryName, headerMarkTechnicName, headerAboutName, 
    headerPriceName, headerDeliveryName, headerContactsName]

// Элементы всплывающего меню 
const elementsList = [headerCatalogDeliveryListMenu, headerMarkTechnicListMenu, 
    headerAboutListMenu]

for (let i of elements) {
    i.addEventListener('mouseover', function (event) {

        event.target.style.cursor = "pointer";

        for (let el of elementsName) {
            if (i == el.parentElement.parentElement || i == el.parentElement) {
                el.style.color = '#3167B6';
            }
        }

        i.style.borderBottom = "4px solid #3167B6";

        for (let arrow of headerElArrowsMenu) {
            if (i == arrow.parentElement.parentElement || i == arrow.parentElement) {
                arrow.style.backgroundImage = "url(/img/header/icon-menu-active.png)"
            }
        }

        for (let item of elementsList) {
            if (i == item.parentElement) {
                // console.log(0)
                item.style.display = 'block';

                for (let elemCatalog of headerCatalogDeliveryListItem) {
                    elemCatalog.addEventListener('mouseover', function(event) {
                        event.target.style.borderBottom = '1px solid #3167B6'
                        event.target.style.color = '#3167B6'
                    })
                }

                for (let elemMark of headerMarkTechnicListItem) {
                    elemMark.addEventListener('mouseover', function(event) {
                        event.target.style.borderBottom = '1px solid #3167B6'
                        event.target.style.color = '#3167B6'
                    })
                }
    
                for (let elemAbout of headerAboutListItem) {
                    elemAbout.addEventListener('mouseover', function(event) {
                        event.target.style.borderBottom = '1px solid #3167B6'
                        event.target.style.color = '#3167B6'
                    })
                }
            }
        }

    })
    
    i.addEventListener('mouseout', function (event) {

        for (let el of elementsName) {
            el.style.color = 'black';
        }

        i.style.borderBottom = "none";

        for (let arrow of headerElArrowsMenu) {
            arrow.style.backgroundImage = "url(/img/header/icon-menu.png)"
        }

        for (let item of elementsList) {
            item.style.display = 'none';

            for (let elemCatalog of headerCatalogDeliveryListItem) {
                elemCatalog.addEventListener('mouseout', function(event) {
                    event.target.style.borderBottom = 'none'
                    event.target.style.color = 'black'
                })
            }

            for (let elemMark of headerMarkTechnicListItem) {
                elemMark.addEventListener('mouseout', function(event) {
                    event.target.style.borderBottom = 'none'
                    event.target.style.color = 'black'
                })
            }

            for (let elemAbout of headerAboutListItem) {
                elemAbout.addEventListener('mouseout', function(event) {
                    event.target.style.borderBottom = 'none'
                    event.target.style.color = 'black'
                })
            }
        }
    })
}

let count = 0
burgerMobile.addEventListener('click', function() {
    count += 1;
    console.log(count)
    if (count == 1) {
        burgerMobileList.style.display = 'flex'
    } else {
        burgerMobileList.style.display = 'none'
        count = 0;
    }
})

searchIcon.addEventListener('click', function() {

    fetch('http://127.0.0.1:5500/', {
        method: 'POST',
        body: searchInp.value
    })

    searchInp.value = ''
})