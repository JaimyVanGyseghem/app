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
  numberOfLines,
}) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              height: multiline ? 100 : undefined,
              textAlignVertical: multiline ? "top" : "auto",
            }}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            numberOfLines={multiline ? 5 : undefined}
          />
        )}
        name={name}
      />

      {errors[name] && <Text>This is required.</Text>}
    </>
  );
}
