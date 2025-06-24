"use client";

import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactCards from "./contact-cards";
import FooterCard from "@components/footer-card";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      // companyName: "",
      phoneNumber: "",
      query: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      // companyName: Yup.string().required("Company Name is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      // .matches(
      //   /^[0-9]{10,15}$/,
      //   "Phone number must be between 10 to 15 digits"
      // ),
      query: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Data:", values);
      const body = {
        name: `${values?.firstName} ${values?.lastName}`,
        email: values?.email,
        phoneNumber: values?.phoneNumber,
        query: values?.query,
      }
      try {
        const response = await fetch(
          "https://gateway.agenticcreed.ai/enquiries",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "x-api-key":
                "61dc2990363eccff494bb35001520edb:5ccab764b03e3c95c3d069897b4fef845d254b371e81d12462a88803c0d7dc0586ad73b4a657152334cbd20f4f1ee9f1b2e6fdcfc9bc0a6bfaf9e920d7c70dfcd9d8e084e0afee8751b76eb20fb74f59166eb9de7fc0a167fe8d10c500661c56",
            },
            body: JSON.stringify(body),
          }
        );
      } catch (error) {}
      resetForm();
    },
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Container data-aos="fade-up">
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 2 }} data-aos="fade-up">
          <Box
            sx={{
              fontSize: FontSize.title,
              fontWeight: FontWeight.SemiBold,
              color: Color.TextGreen,
              textAlign: "center",
              mt: "80px",
            }}
          >
            Get in touch.
            <Stack
              style={{
                fontSize: FontSize.title,
                fontWeight: FontWeight.SemiBold,
                color: Color.TextGreen,
                textAlign: "center",
              }}
            >
              We’d love to hear from you.
            </Stack>
          </Box>
          <Typography
            sx={{
              fontSize: FontSize.ExtraLarge,
              fontWeight: 400,
              color: Color.TextSecondary,
              mt: "24px",
              textAlign: "center",
            }}
          >
            Whether you have a question, need support, or want to explore how
            Agentic Creed can help grow your business we’re here to help. Fill
            out the form below or reach out through the contact details
            provided. Our team will get back to you as soon as possible.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography
            sx={{
              fontSize: FontSize.subTitle,
              fontWeight: FontWeight.SemiBold,
              color: Color.TextGreen,
              mt: "95px",
              textAlign: "center",
            }}
          >
            Send us a message
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 1 }}>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                First Name
              </FormLabel>
              <TextField
                fullWidth
                name="firstName"
                margin="normal"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                placeholder="e.g. Mark"
                sx={styles.textFieldStyles}
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                Last Name
              </FormLabel>
              <TextField
                fullWidth
                name="lastName"
                margin="normal"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                placeholder="e.g. Jones"
                sx={styles.textFieldStyles}
              />
            </Box>
            <Box>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                Email
              </FormLabel>
              <TextField
                fullWidth
                multiline
                name="email"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Enter your email"
                sx={styles.textFieldStyles}
              />
            </Box>
            {/* <Box sx={{ mb: 1 }}>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                Company Name
              </FormLabel>
              <TextField
                fullWidth
                multiline
                name="companyName"
                margin="normal"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
                placeholder="e.g. Agentic Creed"
                sx={styles.textFieldStyles}
              />
            </Box> */}
            <Box sx={{ mb: 1 }}>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                Phone Number
              </FormLabel>
              <TextField
                fullWidth
                multiline
                name="phoneNumber"
                margin="normal"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                placeholder="Enter your phone number"
                sx={styles.textFieldStyles}
              />
            </Box>
            <Box>
              <FormLabel
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                }}
              >
                Message
              </FormLabel>
              <TextField
                fullWidth
                multiline
                name="query"
                rows={4}
                margin="normal"
                value={formik.values.query}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.query && Boolean(formik.errors.query)}
                helperText={formik.touched.query && formik.errors.query}
                placeholder="Type your message"
                sx={styles.textFieldStyles}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: "16px",
                backgroundColor: Color.primaryMain,
                minHeight: "56px",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <ContactCards />
        <FooterCard
          title="Visit Us"
          subTitle="Agentic Creed Headquarters 6–9 Square, Stockley Park,  Uxbridge, UB11 1FW, United Kingdom"
          desc="We’d be delighted to welcome you to our headquarters. Whether you’re here for a meeting or just want to say hello, our team is always ready to assist. Your feedback and engagement are invaluable to us, we look forward to connecting with you soon!"
          hasHighlightedText={true}
          hasBtn={false}
        />
      </Box>
    </Container>
  );
};

export default Contact;

const styles = {
  textFieldStyles: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        borderColor: "#E3E5EA",
      },
      "&:hover fieldset": {
        borderColor: "#C4C7D0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "none",
      },
    },
  },
};
