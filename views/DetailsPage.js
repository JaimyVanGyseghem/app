import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import ControllerTextInput from "../components/ControllerTextInput";

const DetailsPage = () => {
  const [ingredients, setIngredients] = useState([
    "", // Initial ingredients state with 1 empty string
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      ingredients: [""],
    },
  });

  const onSubmit = (data) => console.log(data);

  const handleAddIngredient = () => {
    // Add an empty string to the ingredients array
    setIngredients((prevIngredients) => [...prevIngredients, "test"]);
  };

  return (
    <View>
      <Text>Recipe name</Text>
      <ControllerTextInput
        control={control}
        name="recipeName"
        placeholder="recipe name"
        rules={{ required: true }}
        errors={errors}
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ingredientNumber: {
    marginRight: 10,
    fontWeight: "bold",
  },
});

export default DetailsPage;
