import React,{useState, createContext} from 'react'


export const CartCounterContext = createContext();

export const CartCounterProvider = props => {
    const [cartCounter, setCartCounter] = useState(0);
    return(
        <CartCounterContext.Provider value={[cartCounter, setCartCounter]}>
            {props.children}
        </CartCounterContext.Provider>
    );
}
