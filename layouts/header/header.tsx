"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { pagesNavbarData } from "../navbarData";
import Image from "next/image";
import { eventForceLogo } from "@assets/header";
import HeroBox from "@components/hero-Box/hero-box";

// Header colors
const HEADER_BG = "#67B6B2";
const TEXT_COLOR = "#ffffff";
const ACTIVE_COLOR = "#1F1F1F";

function Header() {
  const pathName = usePathname();
  const [anchorElAdd, setAnchorElAdd] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseAdd = (): void => {
    setAnchorElAdd(null);
  };

  const toggleDrawerMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeroBox>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            color: TEXT_COLOR,
          }}
        >
          <DashboardHeader />
          <MobileHeader
            toggleDrawerMenu={toggleDrawerMenu}
            anchorElAdd={anchorElAdd}
            openMenu={openMenu}
            handleCloseAdd={handleCloseAdd}
          />
        </AppBar>
      </Container>
    </HeroBox>
  );
}

export default Header;

const DashboardHeader: React.FC = () => {
  const pathName = usePathname();
  const filteredNavbarData = pagesNavbarData;

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "transparent",
        px: { xs: 1, sm: 2 },
        pt: { xs: 1, sm: 2 },
        display: { xs: "none", sm: "flex" },
      }}
    >
      {/* Top Row */}
      <Grid>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
         <Stack direction="row" alignItems="center" spacing={2}>
  <Box
    sx={{
      width: { xs: 180, md: 200 }, // 120px on small screens, 200px on md+
      maxWidth: "100%",
      height: "auto",
    }}
  >
    <Image
      src={eventForceLogo}
      alt="Event Force Logo"
      width={200}
      height={40}
      style={{ width: "100%", height: "auto", display: "block" }}
      sizes="(max-width: 900px) 120px, 200px"
    />
  </Box>
</Stack>

          <Stack spacing={0.5} flexGrow={1} pl={{ xs: 1, sm: 2,md:4 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "6px", sm: "12px" },
                background: "#1F1F1F",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: { xs: "auto", sm: "34px" ,},
                backgroundColor: "#67B6B2",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
                flexWrap: "wrap",
                justifyContent: { xs: "flex-start", md: "flex-end"}
              }}
            >
              {filteredNavbarData.map(({ id, title, link }) => {
                const isActive = pathName === link;
                return (
                  <StyledNavLink
                    key={`page-${id}`}
                    href={link}
                    sx={{
                      color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                      fontWeight: isActive ? 500 : 500,
                      fontSize: { xs: "0.85rem", sm:"0.75rem",md: "0.95rem",lg:'1rem' },
                      px: { xs: 1,lg:2 },
                      borderRadius: 2,
                      transition: "color 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {title}
                  </StyledNavLink>
                );
              })}
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              width: { xs: "60%", sm: "70%" },
              height: { xs: "10px", sm: "15px" },
              background: "linear-gradient(to right, #d38c3a, #8c4f10)",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #d38c3a, #8c4f10)",
              }}
            />
            <Box
              sx={{
                width: { xs: "30%", sm: "60%" },
                height: { xs: "3px", sm: "6px" },
                backgroundColor: "#2E2E2E",
                mt: { xs: 1, sm: 3 },
                ml: "auto",
                mr: 0,
              }}
            />
          </Box>

          <Typography
            variant="h3"
            color="black"
            sx={{
              fontFamily: "Arial, sans-serif",
              whiteSpace: "nowrap",
              fontSize: { xs: "1.1rem", sm: "2rem" },
              fontWeight: 700,
              direction: "rtl",
              mx: 2,
              mt: "16px",
            }}
          >
            مؤسسة قوة الحدث للترفيه
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

const MobileHeader = (props: any) => {
  const pathName = usePathname();
  const { toggleDrawerMenu, openMenu } = props;
  const [isClicked, setIsClicked] = useState(false); // Added state for click

  const handleClick = () => {
    setIsClicked(true);
    toggleDrawerMenu();
    setTimeout(() => setIsClicked(false), 200); // Reset after click animation
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", sm: "none" },
        minHeight: "50px",
        backgroundColor: "transparent",
        color: TEXT_COLOR,
      }}
    >
      <Box width={"100%"}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          gap={1}
        >
          {/* Logo on the left */}
          <Box display="flex" alignItems="center">
            <Link href="/">
              <Image
                src={eventForceLogo}
                alt="Event Force Logo"
                width={200}
                height={32}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Link>
          </Box>
          {/* Hamburger menu on the right */}
          <Tooltip title="Menu">
            <IconButton
              onClick={handleClick}
              sx={{
                background: openMenu ? "#fff" : "#fff",
                color: "#67B6B2",
                boxShadow: "none",
                p: 1,
                "&:hover": {
                  background: openMenu ? "#transparent" : "#4a9e9e",
                },
                "&:active": {
                  background: "transparent", 
                },
                transition: "transform 0.3s, background 0.3s",
                transform: openMenu ? "rotate(90deg) scale(1.1)" : "none",
              }}
            >
              {openMenu ? (
                <CloseIcon
                  sx={{ fontSize: 32, color: "#000", transition: "all 0.3s" }}
                />
              ) : (
                <MenuIcon
                  sx={{ fontSize: 30, color: "#67B6B2", transition: "all 0.3s" }}
                />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
        <Drawer
          anchor="right"
          open={openMenu}
          onClose={toggleDrawerMenu}
          sx={{
            borderRadius: "10px",
            "& .MuiDrawer-paper": {
              backgroundColor: HEADER_BG,
              color: TEXT_COLOR,
              borderRadius: 3,
              width: 260,
              p: 0,
              boxShadow: "none",
              overflowX: "hidden",
            },
          }}
        >
          <Stack
            alignItems="flex-start"
            justifyContent="flex-start"
            width="100%"
            padding={2}
            gap={1}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onClick={handleClick}
                sx={{
                  backgroundColor: isClicked ? "transparent" : "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:active": {
                    backgroundColor: "transparent", 
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: 32, mr: 2 }} />
              </IconButton>
            </Box>
            {/* Navigation links */}
            {pagesNavbarData.map(({ id, title, link }) => {
              const isActive = pathName === link;
              return (
                <Link
                  key={`mobile-page-${id}`}
                  href={link}
                  style={{
                    color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 6,
                    display: "block",
                    marginBottom: 2,
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onClick={toggleDrawerMenu}
                >
                  {title}
                </Link>
              );
            })}
          </Stack>
        </Drawer>
      </Box>
    </Box>
  );
};

const StyledNavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&.active": {
    fontWeight: 500,
    color: ACTIVE_COLOR,
  },
}));