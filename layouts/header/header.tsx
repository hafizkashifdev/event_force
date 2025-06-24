"use client";

import { AppLogoIcon } from "@assets/icons";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {FontSize, } from "@root/enems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { pagesNavbarData } from "../navbarData";
import HeroBox from "@components/hero-Box/hero-box";
import Image from "next/image";
import { eventForceLogo } from "@assets/header";

// Header colors
const HEADER_BG = "#67B6B2";
const TEXT_COLOR = "#1F1F1F";
const ACTIVE_COLOR = "#0066CC";

function Header() {
  const pathName = usePathname();

  const [anchorElAdd, setAnchorElAdd] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [menu, setMenu] = useState<any>(null);
  const menuOpen = Boolean(menu?.main);

  function handleClickMenu(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void {
    setMenu({ main: event.currentTarget, id });
  }
  function handleCloseMenu(): void {
    setMenu(null);
  }
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
          <DashboardHeader
            handleClickMenu={handleClickMenu}
            handleCloseMenu={handleCloseMenu}
            menu={menu}
            handleCloseAdd={handleCloseAdd}
            menuOpen={menuOpen}
          />
          <MobileHeader
            toggleDrawerMenu={toggleDrawerMenu}
            anchorElAdd={anchorElAdd}
            openMenu={openMenu}
            handleCloseAdd={handleCloseAdd}
            menu={menu}
            handleClickMenu={handleClickMenu}
            handleCloseMenu={handleCloseMenu}
          />
        </AppBar>
      </Container>
    </HeroBox>
  );
}

export default Header;

interface DashboardHeaderProps {
  handleClickMenu: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  handleCloseMenu: () => void;
  menu: any;
  handleCloseAdd: () => void;
  menuOpen: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  handleClickMenu,
  handleCloseMenu,
  menu,
  handleCloseAdd,
  menuOpen,
}) => {
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
              alt="Event Force Logo"
              width={180}
              height={40}
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
    // px: { xs: 1, md: 3 },
    flexWrap: "wrap",
    justifyContent: "flex-end", 
  }}
            >
              {filteredNavbarData.map(
                ({ id, title, link, subMenu, icon: Icon }) => {
                  const isActive =
                    pathName === link ||
                    (subMenu && subMenu.some((item) => item.link === pathName));

                  if (subMenu) {
                    return (
                      <Box key={`page-${id}`} sx={{ position: "relative" }}>
                        <Button
                          onClick={(e) => handleClickMenu(e, id)}
                          sx={{
                            color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                            fontWeight: isActive ? 700 : 500,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            px: { xs: 1, md: 2 },
                            py: { xs: 0.5, md: 1 },
                            borderRadius: 2,
                            transition: "color 0.2s",
                            whiteSpace: "nowrap",
                            textTransform: "none",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {title}
                          {Icon && <Icon sx={{ ml: 0.5 }} />}
                        </Button>
                        <Menu
                          anchorEl={menu?.id === id ? menu.main : null}
                          open={menu?.id === id}
                          onClose={handleCloseMenu}
                          sx={{
                            "& .MuiPaper-root": {
                              backgroundColor: "#67B6B2",
                              mt: 1,
                              minWidth: "200px",
                            },
                          }}
                        >
                          {subMenu.map((subItem) => (
                            <MenuItem
                              key={`sub-${subItem.id}`}
                              onClick={handleCloseMenu}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                                },
                              }}
                            >
                              <SubMenuLink
                                href={subItem.link}
                                sx={{
                                  color:
                                    pathName === subItem.link
                                      ? ACTIVE_COLOR
                                      : TEXT_COLOR,
                                  fontWeight:
                                    pathName === subItem.link ? 700 : 500,
                                  width: "100%",
                                }}
                              >
                                {subItem.title}
                              </SubMenuLink>
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    );
                  }

                  return (
                    <StyledNavLink
                      key={`page-${id}`}
                      href={link}
                      sx={{
                        color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                        fontWeight: isActive ? 700 : 500,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        px: { xs: 1, md: 2 },
                        py: { xs: 0.5, md: 1 },
                        borderRadius: 2,
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {title}
                    </StyledNavLink>
                  );
                }
              )}
            </Box>
          </Stack>
        </Stack>
      </Grid>

      {/* Second Row with Arabic Text */}
      <Grid mt={2}>
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

          {/* Arabic text */}
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
  const {
    toggleDrawerMenu,
    anchorElAdd,
    openMenu,
    handleCloseAdd,
    menuOpen,
    handleClickMenu,
    menu,
    handleCloseMenu,
  } = props;

  const filteredNavbarData = pagesNavbarData;

  return (
    <>
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
            <Tooltip title="Menu">
              <Button onClick={toggleDrawerMenu}>
                <MenuIcon
                  sx={{
                    fontSize: 30,
                    color: TEXT_COLOR,
                  }}
                />
              </Button>
            </Tooltip>
            <Box mx="auto">
              <Link href="/">
                <AppLogoIcon />
              </Link>
            </Box>
          </Stack>
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={toggleDrawerMenu}
            sx={{ borderRadius: "10px" }}
          >
            <Box
              sx={{
                width: "240px",
                p: 2,
                backgroundColor: HEADER_BG,
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
              {filteredNavbarData.map(({ id, title, link, subMenu }) => {
                const isActive =
                  pathName === link ||
                  (subMenu && subMenu.some((item) => item.link === pathName));

                return (
                  <Box key={`mobile-page-${id}`} width="100%">
                    <StyledNavLink
                      href={subMenu ? "#" : link}
                      onClick={
                        subMenu
                          ? () =>
                              handleClickMenu(
                                {
                                  currentTarget: document.getElementById(
                                    `mobile-menu-${id}`
                                  ),
                                },
                                id
                              )
                          : handleCloseAdd
                      }
                      sx={{
                        fontSize: FontSize.Huge,
                        color: isActive ? ACTIVE_COLOR : TEXT_COLOR,
                        width: "100%",
                        textAlign: "left",
                        py: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {title}
                      {subMenu && <KeyboardArrowDownIcon />}
                    </StyledNavLink>

                    {subMenu && (
                      <Box
                        id={`mobile-menu-${id}`}
                        sx={{
                          pl: 2,
                          display: menu?.id === id ? "block" : "none",
                          width: "100%",
                        }}
                      >
                        {subMenu.map((subItem) => (
                          <StyledNavLink
                            key={`mobile-sub-${subItem.id}`}
                            href={subItem.link}
                            onClick={handleCloseAdd}
                            sx={{
                              fontSize: FontSize.Large,
                              color:
                                pathName === subItem.link
                                  ? ACTIVE_COLOR
                                  : TEXT_COLOR,
                              width: "100%",
                              textAlign: "left",
                              py: 1,
                              pl: 2,
                            }}
                          >
                            {subItem.title}
                          </StyledNavLink>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

const StyledNavLink = styled(Link)(({ theme }) => ({
  position: "relative",
  color: TEXT_COLOR,
  fontWeight: 450,
  fontFamily: "inter",
  fontSize: "0.9rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  "&:hover": {
    color: ACTIVE_COLOR,
    fontWeight: 600,
  },
}));

const SubMenuLink = styled(Link)(() => ({
  textDecoration: "none",
  fontFamily: "inter",
  "&:hover": {
    color: ACTIVE_COLOR,
    fontWeight: 600,
  },
}));
