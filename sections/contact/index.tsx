'use client';

import { Box, Button, Container, FormLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import { Color } from "@root/enems";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Data:", values);
      const body = {
        name: values.name,
        email: values.email,
        description: values.description,
      };
      try {
        const response = await fetch(
          "https://gateway.agenticcreed.ai/enquiries",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "x-api-key": "61dc2990363eccff494bb35001520edb:5ccab764b03e3c95c3d069897b4fef845d254b371e81d12462a88803c0d7dc0586ad73b4a657152334cbd20f4f1ee9f1b2e6fdcfc9bc0a6bfaf9e920d7c70dfcd9d8e084e0afee8751b76eb20fb74f59166eb9de7fc0a167fe8d10c500661c56",
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
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        // backgroundImage: `url(${contactUsBg.src})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          zIndex: 1,
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          py: 4,
        }}
        data-aos="fade-up"
      >
        <Grid container spacing={2} justifyContent="center">
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
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', p: 3, borderRadius: 2 }}
            >
              <Box sx={{ mb: 2 }}>
                <FormLabel
                  sx={{
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.SemiBold,
                    color: Color.TextGreen,
                  }}
                >
                  Name
                </FormLabel>
                <TextField
                  fullWidth
                  name="name"
                  margin="normal"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  placeholder="e.g. John Doe"
                  sx={styles.textFieldStyles}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
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
              <Box sx={{ mb: 2 }}>
                <FormLabel
                  sx={{
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.SemiBold,
                    color: Color.TextGreen,
                  }}
                >
                  Description
                </FormLabel>
                <TextField
                  fullWidth
                  multiline
                  name="description"
                  rows={4}
                  margin="normal"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
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
        <Box
          sx={{
            mt: 4,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" color="black" gutterBottom>
            Contact Us
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Typography color="black">📞 +966 492 7012</Typography>
            <Typography color="black">✉️ Reservations@eventforce.sa.com</Typography>
            <Typography color="black" dir="rtl">
              📍 شركة إيفنت فورس لإدارة الأحداث والحشود
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
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