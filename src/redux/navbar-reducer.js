let initialState = {
    nav_elements:[
    {
        icon: 'bx bx-cart-alt',
        text: 'asdasda',
        items: ['item1','item2','item3','item4']
    },
    {
        icon: 'bx bxs-leaf',
        text: 'asd',
        items: ['item1','item2','item3','item4']
    },
    {
        icon: 'bx bxl-unity',
        text: 'zxcza',
        items: ['item1','item2','item3','item4']
    }        
  ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;