import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import ControllerTextInput from "../components/ControllerTextInput";

const DetailsPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <View>
      <ControllerTextInput
        control={control}
        name="firstName"
        placeholder="First name"
        rules={{ required: true }}
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
});

export default DetailsPage;
