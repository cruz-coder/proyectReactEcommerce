import React from 'react'

const NavCategories = () => {
    const categories = [
        {id: 1, name: 'home'},
        {id: 1, name: 'productos'},
        {id: 1, name: 'nosotros'}
    ]

    return (
        <nav>
            {categories.map((category)=>{
                return(
                    <li><a hrfe="" class="justify-between" key={category.id}>{category.name}</a> </li>
                )
            })}
        </nav>
        
    )
}

export default NavCategories