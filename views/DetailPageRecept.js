import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailPageRecept = ({ route }) => {
  const recipe = route.params.recipe;

  useEffect(() => {
    console.log(recipe);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit is mijn standaard React-component!</Text>
      <Text>recipe name</Text>
      <Text>{recipe.recipeName}</Text>
      <Text>Category</Text>
      <Text>{recipe.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailPageRecept;
