import Pizza from '../Assets/pizza.png';
import ComboPlate from '../Assets/comboplate.png';
import SpanishRice from '../Assets/spanishrice.png';


 const data = [
    {
        id: 1,
        ItemName : 'Italy Pizza',
        MoreInfo : 'Extra cheese and topping',
        
        Quantity: 1,
        Price: 681,

    },
    {
        id: 2,
        ItemName : 'Combo Plate',
        MoreInfo : 'Extra cheese and topping',
        Image: {ComboPlate},
        Quantity: 1,
        Price: 681,

    },
    {
        id: 3,
        ItemName : 'Spanish Rice',
        MoreInfo : 'Extra garlic',
        Image: {SpanishRice},
        Quantity: 1,
        Price: 681,

    }

]

export default data