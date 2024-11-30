import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ReusableInput } from "../utils/ReactConstants";
import { ContactFormValues } from "../utils/typeConstants";
import { useAppSelector } from "../utils/hooks";
import { ALL_COLORS } from "../utils/constants";

const Contact: React.FC = () => {
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );

  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value) || value?.length === 11) return;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormValues> = {};

    if (!formValues.name) newErrors.name = "Name is required";
    if (
      !formValues.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)
    )
      newErrors.email = "Valid email is required";
    if (!formValues.phone || !/^\d{10}$/.test(formValues.phone))
      newErrors.phone = "Valid phone number is required (10 digits)";
    if (!formValues.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "500px",
        margin: "auto",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center" }}
        className={isDarkTheme ? "gradient_text_light" : "gradient_text_dark"}
      >
        Contact Us
      </Typography>

      <ReusableInput
        handleChange={handleChange}
        label="Full Name"
        name="name"
        value={formValues.name}
        errors={errors}
        isDarkTheme={isDarkTheme}
      />

      <ReusableInput
        label="Email"
        name="email"
        type="email"
        handleChange={handleChange}
        value={formValues.email}
        errors={errors}
        isDarkTheme={isDarkTheme}
      />

      <ReusableInput
        label="Phone Number"
        name="phone"
        type="tel"
        handleChange={handleChange}
        value={formValues.phone}
        errors={errors}
        isDarkTheme={isDarkTheme}
      />

      <ReusableInput
        label="Message"
        name="message"
        handleChange={handleChange}
        value={formValues.message}
        errors={errors}
        isDarkTheme={isDarkTheme}
        multiline={true}
        rows={4}
      />

      <Button
        type="submit"
        variant="contained"
        className={`button-gradient-slide ${
          isDarkTheme
            ? "button-gradient-slide-light"
            : "button-gradient-slide-dark"
        }`}
        fullWidth
        sx={{
          color: isDarkTheme
            ? ALL_COLORS.DARK_FONT_BG_COLOR
            : ALL_COLORS.LIGHT_FONT_BG_COLOR,
          fontWeight: 500,
        }}
      >
        <span>Submit</span>
      </Button>
    </Box>
  );
};

export default Contact;
