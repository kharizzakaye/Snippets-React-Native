import React from 'react'
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
    ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

export const MenuItems = () => {
  return (
    <>
        <View style={{ flex: 0.75 }}>
            <ScrollView
                indicatorStyle='black'
            >
                <Text 
                    style={{
                        fontSize: 30,
                        color: "#ffffff"
                    }}
                >
                    View Menu
                </Text> 

                <Text 
                    style={{
                        fontSize: 30,
                        color: "#ffffff"
                    }}
                >
                    { menuItemsToDisplay[0] }
                </Text>
            </ScrollView>
        </View>
    </>
  )
}
