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
import { FontSize } from "@root/enems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { pagesNavbarData } from "../navbarData";
import Image from "next/image";
import { eventForceLogo } from "@assets/header";
import HeroBox from "@components/hero-Box/hero-box";

// Header colors
const HEADER_BG = "#67B6B2";
const TEXT_COLOR = "#1F1F1F";
const ACTIVE_COLOR = "#0066CC";

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
        px: { xs: 1, md: 4 },
        pt: { xs: 1, md: 2 },
        display: { xs: "none", lg: "flex" },
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
            <Image
              src={eventForceLogo}
              alt=" Event Force Logo"
              width={200}
              height={42}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Stack>

          <Stack spacing={0.5} flexGrow={1} pl={{ xs: 1, md: 4 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "6px", md: "12px" },
                background: "#1F1F1F",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: { xs: "auto", md: "34px" },
                backgroundColor: "#67B6B2",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 3 },
                flexWrap: "wrap",
                justifyContent: "flex-end",
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
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                      px: { xs: 1, md: 2 },
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
              width: { xs: "60%", md: "70%" },
              height: { xs: "10px", md: "15px" },
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
                width: { xs: "30%", md: "60%" },
                height: { xs: "3px", md: "6px" },
                backgroundColor: "#2E2E2E",
                mt: { xs: -1, md: 3 },
                ml: "auto",
                mr: 0,
              }}
            />
          </Box>

          <Typography
            variant="h2"
            color="black"
            sx={{
              fontFamily: "Arial, sans-serif",
              whiteSpace: "nowrap",
              fontSize: { xs: "1.1rem", md: "2rem" },
              fontWeight: 700,
              direction: "rtl",
              mx: 2,
              mt: 2,
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
  const { toggleDrawerMenu, anchorElAdd, openMenu, handleCloseAdd } = props;
  const filteredNavbarData = pagesNavbarData;
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      if (window.innerWidth >= 1200 && openMenu) {
        toggleDrawerMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openMenu, toggleDrawerMenu]);

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", lg: "none" },
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
                alt=" Event Force Logo"
                width={120}
                height={32}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Link>
          </Box>
          {/* Hamburger menu on the right */}
          <Tooltip title="Menu">
            <IconButton
              onClick={toggleDrawerMenu}
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                p: 1,
                '&:hover': {
                  background: 'transparent',
                },
                '&:active': {
                  background: 'transparent',
                },
                transition: 'transform 0.3s',
                transform: openMenu ? 'rotate(90deg) scale(1.1)' : 'none',
              }}
            >
              {openMenu ? (
                <CloseIcon sx={{ fontSize: 32, color: TEXT_COLOR, transition: 'all 0.3s' }} />
              ) : (
                <MenuIcon sx={{ fontSize: 30, color: TEXT_COLOR, transition: 'all 0.3s' }} />
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
            '& .MuiDrawer-paper': {
              backgroundColor: HEADER_BG,
              color: TEXT_COLOR,
              borderRadius: 3,
              width: 260,
              p: 0,
              boxShadow: 'none',
              overflowX: 'hidden',
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: HEADER_BG,
              pr: 4,
              color: TEXT_COLOR,
              borderRadius: 5,
            }}
          >
            <IconButton
              sx={{ display: "block", ml: "auto" }}
              onClick={toggleDrawerMenu}
            >
              <CloseIcon sx={{ color: TEXT_COLOR }} />
            </IconButton>
          </Box>
          <Stack
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            paddingLeft={2}
            gap={1}
          >
            {openMenu && filteredNavbarData.map(({ id, title, link }) => {
              const isActive = pathName === link;
              return (
                <Box key={`mobile-page-${id}`} width="100%">
                  <StyledNavLink
                    href={link}
                    onClick={handleCloseAdd}
                    sx={{
                      fontSize: FontSize.Huge,
                      color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                      width: "100%",
                      textAlign: "left",
                      py: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={0.5}>
                      {title}
                    </Box>
                  </StyledNavLink>
                </Box>
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
