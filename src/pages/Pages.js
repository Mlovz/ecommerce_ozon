import React, { useEffect, useState } from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Profile from './Profile'
import Product from './Product'
import CreateProduct from './CreateProduct'
import CreateCategory from './CreateCategory'

import { useSelector } from 'react-redux'
import DetailProduct from './detail/DetailProduct'

const Pages = () => {
    const {auth} = useSelector(state => state)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if(auth.token){
            if(auth.user.role === 1) setIsAdmin(true)
        }
    },[auth.token])
    
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/menu' component={Product}/>
            <Route exact path='/menu/:id' component={DetailProduct}/>
            <Route exact path='/create_product' component={isAdmin ? CreateProduct : null}/>
            <Route exact path='/create_category' component={isAdmin ? CreateCategory : null}/>
        </Switch>
    )
}

export default Pages
