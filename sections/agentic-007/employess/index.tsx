// import React from 'react'
// import { agenticDesicionImage1 } from '@assets/agentic-007';
// import HeroBox from '@components/hero-Box/hero-box'
// import { Container, Grid, Typography } from '@mui/material'
// import { Color, FontSize, FontWeight } from '@root/enems';
// import Image from 'next/image';

// const Employess = () => {

//     const listItems = [
//         {
//             id: 1,
//             title: "Seamless Scheduling",
//             description: "Access event timelines, meeting details, and agenda updates.",
//         },
//         {
//             id: 2,
//             title: "Collaborate in Real-Time",
//             description: "Engage with teams, share insights, and discuss key takeaways.",
//         },
//         {
//             id: 3,
//             title: "Stay Informed ",
//             description: "Keep up with industry trends, policy changes, and official announcements.",
//         },
//     ];

//     return (
//         <HeroBox>
//             <Container maxWidth='xl'>
//                 <Grid container spacing={2} justifyContent='center' alignItems='center' sx={{ mt: "100px" }}>
//                     <Grid size={{ xs: 12 }} sx={{ mt: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                         <Typography sx={{ fontSize: FontSize.subTitle, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>
//                             Key Benefits & Features
//                         </Typography>
//                         <Typography sx={{ textAlign: 'center', fontSize: FontSize.ExtraLarge, fontWeight: FontWeight.Regular, color: Color.TextSecondary, maxWidth: '880px', mt: '16px' }}>
//                             Agentic 007 adapts dynamically to meet the needs of different users, ensuring personalised and role-specific interactions for seamless engagement.
//                         </Typography>
//                     </Grid>

//                     <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
//                         <Typography
//                             sx={{
//                                 fontSize: "42px",
//                                 fontWeight: FontWeight.Bold,
//                                 color: Color.TextGreen,
//                                 mt: "24px",
//                             }}
//                         >
//                             Employees – Maximise Productivity
//                         </Typography>
//                         {listItems.map((item) => (
//                             <ul key={item.id} style={{ margin: '0px', padding: '0px' }}>
//                                 <li
//                                     style={{ fontSize: "18px", fontWeight: 700, color: "#3C4A47", listStyle: 'none' }}
//                                 >
//                                     {item.title}
//                                     <Typography
//                                         component="span"
//                                         sx={{
//                                             fontSize: FontSize.ExtraLarge,
//                                             fontWeight: FontWeight.Regular,
//                                             color: Color.TextSecondary,
//                                         }}
//                                     >
//                                         – {item.description}
//                                     </Typography>
//                                 </li>
//                             </ul>
//                         ))}
//                     </Grid>
//                     <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
//                         <Image
//                             src={agenticDesicionImage1}
//                             alt="image"
//                             style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
//                         />
//                     </Grid>
//                 </Grid>
//             </Container>
//         </HeroBox>
//     )
// }

// export default Employess
