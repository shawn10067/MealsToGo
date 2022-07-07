import React, { useContext, useEffect, useState } from "react";
import { List, Text } from "react-native-paper";
import SafeAreaView from "../../../components/safeAreaView";
import { CartContext } from "../../../services/cart/cart.context";
import { payRequest } from "../../../services/checkout/checkout.service";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import {
  CartEmptyText,
  CartIcon,
  CartIconContainer,
  CartItemScroll,
  CartList,
  CartView,
  ClearButton,
  CreditCardView,
  NameInput,
  NameText,
  NameTextView,
  NameView,
  PayButton,
  PaymentProcessing,
  TotalText,
} from "../components/checkout.styles";
import CreditCardInput from "../components/credit-card.component";

const CheckoutScreen = ({ navigation }) => {
  const { cart, restuarant, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // pay request
  const onPay = () => {
    if (card && card.id) {
      setIsLoading(true);
      payRequest(card.id, total * 100, name)
        .then(() => {
          navigation.navigate("Checkout Success");
          setError(null);
          setIsLoading(false);
          clearCart();
        })
        .catch((e) => {
          navigation.navigate("Checkout Error");
          setError(e);
          console.error("Error processing payment");
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    const finalSum = cart.reduce((cartTotal, item) => {
      return cartTotal + item.price;
    }, 0);
    setTotal(finalSum / 100);
  }, [cart]);

  if (cart.length === 0 || !restuarant) {
    return (
      <SafeAreaView>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <CartEmptyText>Your cart is empty</CartEmptyText>
        </CartIconContainer>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <RestaurantInfoCard restaurant={restuarant} />
        {isLoading && <PaymentProcessing />}
        <CartView>
          <CartItemScroll>
            <CartList title={"Order"}>
              {cart.map(({ item, price }, index) => (
                <List.Item title={`${item} - ${price / 100}`} key={index} />
              ))}
            </CartList>
          </CartItemScroll>
          <TotalText>Total: ${total}</TotalText>
        </CartView>
        <NameView>
          <NameTextView>
            <NameText>Name: </NameText>
          </NameTextView>
          <NameInput
            onChangeText={(val) => {
              setName(val);
            }}
            value={name ? name : ""}
          />
        </NameView>
        <CreditCardView>
          {name !== "" ? (
            <>
              <CreditCardInput name={name} setCard={setCard} />
              <PayButton icon="cash" onPress={onPay} disabled={isLoading}>
                Pay
              </PayButton>
            </>
          ) : null}
          <ClearButton icon="cart-off" onPress={clearCart} disabled={isLoading}>
            Clear
          </ClearButton>
        </CreditCardView>
      </SafeAreaView>
    );
  }
};

export default CheckoutScreen;
