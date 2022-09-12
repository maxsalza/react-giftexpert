import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one Punch'])

    const onAddCategory = ( newCategory)  =>{

        if(categories.includes(newCategory)){
            alert("La categoria ingresada ya existe")
            return;
        }

        setcategories([newCategory, ...categories])
        // setcategories([...categories, 'japon'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory}
        // setCategories = {setcategories}
        />
            {
            categories.map( ( category )  => (
                <GifGrid key ={ category } category = {category}/>))
            }
            {/*gif item*/}
    </>
  )
}
