import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import ControllerTextInput from "../components/ControllerTextInput";
import { Picker } from "@react-native-picker/picker";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const DetailsPage = () => {
  // Initial ingredients state with 1 empty string
  const [ingredients, setIngredients] = useState([""]);
  // Categories to choose from when making a recipe
  const categories = ["Pizza", "Pasta", "Sushi", "Burgers", "Dessert"];
  // Write the data to the firestore
  const { data, setData, getRecipeData } = useFirebaseStates();
  // Using the submit/error functions and values from react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      ingredients: [""],
      price: "",
      category: "",
      time: "",
    },
  });

  const onSubmit = (data) => {
    setData("recipes", data);
    const fetchRecipes = async () => {
      await getRecipeData("recipes");
    };
    fetchRecipes();
  };

  const handleAddIngredient = () => {
    // Add an empty string to the ingredients array
    setIngredients((prevIngredients) => [...prevIngredients, "test"]);
  };

  return (
    <ScrollView
      // contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text>Recipe name</Text>
      <ControllerTextInput
        control={control}
        name="recipeName"
        placeholder="recipe name"
        rules={{ required: true }}
        errors={errors}
      />
      <Text>Category</Text>
      <Controller
        name="category"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange}>
            {categories.map((category) => (
              <Picker.Item
                key={category}
                style={styles.picker}
                label={category}
                value={category}
              />
            ))}
          </Picker>
        )}
      />
      <Text>Ingredients</Text>

      {ingredients.map((ingredient, index) => (
        <View style={styles.ingredientContainer} key={index}>
          <Text style={styles.ingredientNumber}>{index + 1}</Text>
          <ControllerTextInput
            control={control}
            name={`ingredients[${index}]`}
            placeholder={`New ingredient`}
            rules={{ required: true }}
            errors={errors}
          />
        </View>
      ))}
      <Button title="Add Ingredient" onPress={handleAddIngredient} />
      <Text>Description</Text>
      <ControllerTextInput
        control={control}
        name="description"
        placeholder="Description"
        rules={{ required: true }}
        errors={errors}
        multiline={true}
        numberOfLines={5}
      />
      <View style={styles.priceAndAmount}>
        <View>
          <Text>Total recipe price</Text>
          <ControllerTextInput
            control={control}
            name="price"
            placeholder="price"
            errors={errors}
          />
        </View>
        <View>
          <Text>Total Time to make</Text>
          <ControllerTextInput
            control={control}
            name="time"
            placeholder="time"
            errors={errors}
          />
        </View>
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
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
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ingredientNumber: {
    marginRight: 10,
    fontWeight: "bold",
  },
  picker: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  priceAndAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DetailsPage;
