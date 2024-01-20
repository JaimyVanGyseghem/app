import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function ControllerTextInput({
  control,
  name,
  placeholder,
  rules,
  errors,
  multiline,
}) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={
              ({
                height: multiline ? 100 : undefined,
                verticalAlign: multiline ? "top" : "auto",
              },
              styles.input)
            }
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            rows={multiline ? 5 : undefined}
          />
        )}
      />

      {errors[name] && <Text>This is required.</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    width: "80%",
  },
});
