'use client';

import { Box, Button, FormLabel, Grid, TextField, Typography } from '@mui/material'
import { Color } from '@root/enems'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontSize, FontWeight } from '@root/enems/text-size';
import { useRouter } from 'next/navigation';
import HeroBox from '@components/hero-Box/hero-box';

const PartnerWithUs = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companyRN: '',
      EnterPassword: '',
      ConfirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      companyName: Yup.string().required('Company Name is required'),
      companyRN: Yup.string().required('Company Registration Number is required'),
      EnterPassword: Yup.string()
        .required('Password is required'),
      ConfirmPassword: Yup.string().required('Confirm Password is required')
        .oneOf([Yup.ref('EnterPassword')], 'Passwords must match')
    }),

    onSubmit: (values, { resetForm }) => {
      console.log('Form Data:', values);
      alert('Message Sent!');
      resetForm();
    },
  });

  return (
    <HeroBox>
      <Grid container spacing={2} sx={{ maxWidth: '1075px', margin: 'auto', justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 12 }} >
          <Typography sx={{ fontSize: FontSize.title, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, textAlign: 'center', mt: '80px' }}>
            Create your Delegate Account
          </Typography>
          <Typography sx={{ fontSize: FontSize.ExtraLarge, fontWeight: 400, color: Color.TextSecondary, mt: '24px', textAlign: 'center' }}>Sign up with name, email address and a password</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography sx={{ fontSize: FontSize.subTitle, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, mt: '95px', textAlign: 'center' }}>
            Create Account
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Box sx={{ mb: 1 }}>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, }}>First Name</FormLabel>
              <TextField
                fullWidth
                name="firstName"
                margin="normal"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                placeholder='e.g. Mark'
                sx={styles.textFieldStyles}
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Last Name</FormLabel>
              <TextField
                fullWidth
                name="lastName"
                margin="normal"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                placeholder='e.g. Jones'
                sx={styles.textFieldStyles}
              />
            </Box>
            <Box>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Email</FormLabel>
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
                placeholder='e.g. +44 123 456 78'
                sx={styles.textFieldStyles}

              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Company Name</FormLabel>
              <TextField
                fullWidth
                multiline
                name="companyName"
                margin="normal"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
                placeholder='e.g. Event Force'
                sx={styles.textFieldStyles}

              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Company Registration Number</FormLabel>
              <TextField
                fullWidth
                multiline
                name="companyRN"
                margin="normal"
                value={formik.values.companyRN}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.companyRN && Boolean(formik.errors.companyRN)}
                helperText={formik.touched.companyRN && formik.errors.companyRN}
                placeholder='Company Registration Number'
                sx={styles.textFieldStyles}

              />
            </Box>
            <Box>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Enter Password</FormLabel>
              <TextField
                fullWidth
                multiline
                name="EnterPassword"
                margin="normal"
                value={formik.values.EnterPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.EnterPassword && Boolean(formik.errors.EnterPassword)}
                helperText={formik.touched.EnterPassword && formik.errors.EnterPassword}
                placeholder='Enter Password'
                sx={styles.textFieldStyles}

              />
            </Box>
            <Box>
              <FormLabel sx={{ fontSize: FontSize.Large, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>Confirm Password</FormLabel>
              <TextField
                fullWidth
                multiline
                name="ConfirmPassword"
                margin="normal"
                value={formik.values.ConfirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.ConfirmPassword && Boolean(formik.errors.ConfirmPassword)}
                helperText={formik.touched.ConfirmPassword && formik.errors.ConfirmPassword}
                placeholder='Confirm Password'
                sx={styles.textFieldStyles}

              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: '16px', backgroundColor: Color.primaryMain, minHeight: '56px' }}
            >
              Sign Up
            </Button>

            <Box sx={{ mt: '36px' }}>
              <Typography sx={{
                fontSize: FontSize.Medium, fontWeight: FontWeight.Medium, color: '#111827', textAlign: 'center',
              }}>
                Already have an account?<span style={{ color: Color.primaryMain, fontSize: FontSize.Medium, fontWeight: FontWeight.Medium, cursor: 'pointer' }}
                  onClick={() => router.push("https://app.agenticcreed.ai/login")}
                >Sign In</span>
              </Typography>
              <Typography sx={{
                fontSize: FontSize.Medium, fontWeight: FontWeight.Medium, color: Color.Grey,
                textAlign: 'center', mt: '24px'
              }}>
                By Signing up, you are creating a guest account, and you agree to  <span style={{ color: '#111827', fontSize: FontSize.Medium, fontWeight: FontWeight.Medium }}>Agentic creed</span>
              </Typography>
            </Box>
          </Box>
        </Grid >
      </Grid >
    </HeroBox>
  )
}

export default PartnerWithUs

const styles = {
  textFieldStyles: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#E3E5EA',
      },
      '&:hover fieldset': {
        borderColor: '#C4C7D0',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'none',
      },
    },
  }
}
