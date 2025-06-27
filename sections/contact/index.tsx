'use client';

import { Box, Button, Container, FormLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import { Color } from "@root/enems";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import SlideSidewayInView from "@components/animations/animation-scroll/slide-sideway-in-view";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      // EmailJS integration
      try {
        await emailjs.send(
          'service_bmve0k8',
          'template_vv6syjj', 
          {
            from_name: values.name,
            from_email: values.email,
            message: values.description,
            to_email: 'hafizkashifdev@gmail.com', 
          },
          '1Bh7X2Ci3ofakBVkj' 
        );
        toast.success('Message sent successfully!', { position: 'top-right' });
        resetForm();
      } catch (error) {
        toast.error('Failed to send message. Please try again.', { position: 'top-right' });
      }
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 100,
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Container
      maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
        }}
        data-aos="fade-up"
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 8 }}>
            <SlideUpInView>
              <Box
                sx={{
                  background: "#67B6B2",
                  padding: "10px",
                  width: { xs: "80%", sm: "60%", md: "40%" },
                  borderTopRightRadius: "36px",
                  mt: 10,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    m: 0,
                    p: 0,
                    textAlign: "center",
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
            </SlideUpInView>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', p: 3, borderRadius: 2 }}
            >
              <SlideUpInView>
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
              </SlideUpInView>
             <SlideSidewayInView> <Button
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
              </Button></SlideSidewayInView>
            </Box>
          </Grid>
        </Grid>
        <SlideUpInView>
        <Box
          sx={{
            mt: 4,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            textAlign: 'center',
            width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
            mx: 'auto',
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Box display="flex" alignItems="center" gap={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <PhoneIcon sx={{ fontSize: 20, color: 'black' }} />
              <Typography color="black">+966 492 7012</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <EmailIcon sx={{ fontSize: 20, color: 'black' }} />
              <Typography color="black">Reservations@eventforce.sa.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} justifyContent={{ xs: 'center', sm: 'flex-end' }}>
              <LocationOnIcon sx={{ fontSize: 20, color: 'black' }} />
              <Typography color="black" dir="rtl">
                شركة إيفنت فورس لإدارة الأحداث والحشود
              </Typography>
            </Box>
          </Stack>
        </Box>
        </SlideUpInView>
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