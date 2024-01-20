import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function ControllerTextInput({
  control,
  name,
  placeholder,
  rules,
}) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />

      {rules.required && <Text>This is required.</Text>}
    </>
  );
}
