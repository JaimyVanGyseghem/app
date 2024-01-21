import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const Recepts = ({ route, navigation }) => {
  const { getRecipeData, recipeData } = useFirebaseStates();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeData = await getRecipeData("recipes");
      if (recipeData) {
        // Do something with the retrieved recipe data
        console.log("Recipe data: ", recipeData);
      } else {
        console.log("Error fetching recipe data");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit zijn mijn recepten!</Text>
      <View>
        {recipeData
          ? recipeData.map((recipe, index) => (
              <View key={index} style={styles.allTheRecipes}>
                <Text>{recipe.recipeName}</Text>
                <Text>{recipe.ingredients}</Text>
                <Text>{recipe.description}</Text>
              </View>
            ))
          : ""}
      </View>
      <Button
        onPress={() => navigation.navigate("DetailsPage")}
        title="Add a recept"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  allTheRecipes: {
    flexDirection: "column",
    marginBottom: 10,
  },
});

export default Recepts;
