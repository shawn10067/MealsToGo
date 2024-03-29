import React, { useContext, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreenList from "../../features/restaurants/screens/restaurant-screen";
import SafeAreaView from "../../components/safeAreaView";
import RestaurantInfoCard from "../../features/restaurants/components/restaurant-info-card.component";
import { Button, List } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";

const RestaurantStack = createStackNavigator();

const RestaurantScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <RestaurantScreenList navigation={navigation} />
    </SafeAreaView>
  );
};

const RestuarantCardView = styled.View`
  flex: 0.5;
`;
const MenuView = styled.View`
  flex: 0.4;
`;
const ButtonView = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

const SpecialButton = styled(Button).attrs({
  mode: "text",
  color: "black",
  icon: "cash",
})`
  border-radius: ${({ theme }) => theme.sizes.md};
  background-color: wheat;
  width: 70%;
  padding: 7px;
`;

const Restaurant = ({ navigation, route }) => {
  const [breakfastAccordian, setBreakfastAccordian] = useState(false);
  const [lunchAccordian, setLunchAccordian] = useState(false);
  const [dinnerAccordian, setDinnerAccordian] = useState(false);
  const [drinksAccordian, setDrinksAccordian] = useState(false);

  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView>
      <RestuarantCardView>
        <RestaurantInfoCard navigation={navigation} route={route} />
      </RestuarantCardView>
      <MenuView>
        <ScrollView>
          <List.Section>
            <List.Accordion
              title="Breakfast"
              left={(props) => <List.Icon {...props} icon="coffee" />}
              expanded={breakfastAccordian}
              onPress={() => setBreakfastAccordian(!breakfastAccordian)}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="English Breakfast" />
            </List.Accordion>
            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
              expanded={lunchAccordian}
              onPress={() => setLunchAccordian(!lunchAccordian)}
            >
              <List.Item title="Grilled Wrap" />
              <List.Item title="Greek Salad" />
              <List.Item title="Burrito" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-turkey" />}
              expanded={dinnerAccordian}
              onPress={() => setDinnerAccordian(!dinnerAccordian)}
            >
              <List.Item title="Osmows Half and Half" />
              <List.Item title="Hamburger" />
              <List.Item title="Jr. Chicken" />
              <List.Item title="Steak" />
            </List.Accordion>
            <List.Accordion
              title="Drinks"
              left={(props) => (
                <List.Icon {...props} icon="glass-mug-variant" />
              )}
              expanded={drinksAccordian}
              onPress={() => setDrinksAccordian(!drinksAccordian)}
            >
              <List.Item title="McDonald's Sprite" />
              <List.Item title="Pure Leaf" />
              <List.Item title="Coke" />
              <List.Item title="Water" />
              <List.Item title="Dasani" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </MenuView>
      <ButtonView>
        <TouchableOpacity>
          <SpecialButton
            onPress={() => {
              //console.log(route.params.restaurant);
              addToCart(
                { item: "special", price: 1299 },
                route.params.restaurant
              );
              navigation.navigate("Checkout");
            }}
          >
            Order Special ($12.99)
          </SpecialButton>
        </TouchableOpacity>
      </ButtonView>
    </SafeAreaView>
  );
};

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        component={RestaurantScreen}
        name="Restaurant Screen"
      />
      <RestaurantStack.Screen
        component={Restaurant}
        name="Restaurant Details"
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
