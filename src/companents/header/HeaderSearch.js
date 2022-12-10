import React from "react";
import { BsSearch } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";
import { SlBasket } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

// ################################

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${v4}`,
    "aria-controls": `action-tabpanel-${v4}`,
  };
}

const fabStyle = {
  position: "absolute",
  display: "none",
};

const fabGreenStyle = {
  color: "#fff",
  bgcolor: "#fbc100",
  "&:hover": {
    bgcolor: "#fbc100",
  },
};

// ########################

const HeaderSearch = () => {
  const [isBoxVisibile, setIsBoxVisibile] = useState(false);
  const [isBasketVisibile, setBasketVisibile] = useState(false);

  // #### Show Box Login ####
  function show() {
    setIsBoxVisibile(true);
  }

  // #### hide login ####

  function hideBox() {
    setIsBoxVisibile(false);
  }

  function show2() {
    setBasketVisibile(true);
  }

  // #### hide login ####

  function hideBox2() {
    setBasketVisibile(false);
  }

  // #### Login box ######
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "#fbc100",
      sx: fabStyle,
      label: "Add",
    },
    {
      color: "#fbc100",
      sx: fabStyle,
      label: "Edit",
    },
    {
      color: "#fbc100",
      sx: { ...fabStyle, ...fabGreenStyle },

      label: "Expand",
    },
  ];

  //## ## ### ##

  return (
    <>
      <div
        style={
          isBasketVisibile === true ? { display: "flex" } : { display: "none" }
        }
        className="basket"
      >
        <div className="basket-warpper">
          <div className="title">
            <h2>Hozir xarid qilish</h2>
            <h3 onClick={hideBox2}>X</h3>
          </div>
          <div className="basket__carts">
            <img
              src="	https://texnomart.uz/_nuxt/img/shopping-card.b37726e.svg"
              alt=""
            />
            <p>Hozircha hech narsa yoq</p>
          </div>
          <button>Sotib olish</button>
        </div>
      </div>

      <div
        className="header-login"
        style={
          isBoxVisibile === true ? { display: "flex" } : { display: "none" }
        }
      >
        <div className="login__cart">
          <Box
            className="login-box"
            sx={{
              bgcolor: "#fff",
              width: 480,
              position: "relative",
              minHeight: 200,
              borderRadius: 10,
            }}
          >
            <AppBar className="appbar" position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="#fbc100"
                textColor="#fbc100"
              >
                <Tab label="Kirish" {...a11yProps(0)} />
                <Tab label="Ro`yhatdan o`tish" {...a11yProps(1)} />
                <div onClick={hideBox} className="x">
                  X
                </div>
              </Tabs>
            </AppBar>
            <div>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <label htmlFor="">
                  {" "}
                  Telefon <span>*</span>
                </label>
                <input
                  className="login__phone"
                  defaultValue="+998"
                  type="number"
                />
                <button className="login__button" type="button">
                  Telefon orqali kirish
                </button>
                <p>Login orqali kirish</p>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <label>
                  Telefon <span> *</span>
                </label>
                <input className="login__phone" type="number" />

                <label className="login-label--item">
                  Ism <span>*</span>
                </label>
                <input className="login__phone" type="number" />

                <label className="login-label--item">
                  familiya <span>*</span>
                </label>
                <input className="login__phone" type="number" />
                <p>Chegirmalar va aksiyalar haqida bilishni istayman</p>
                <button className="login__button" type="button">
                  Royhatdan O`tish
                </button>
              </TabPanel>
            </div>
            {fabs.map((fab, index) => (
              <Zoom
                key={uuidv4()}
                in={value === index}
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${
                    value === index ? transitionDuration.exit : 0
                  }ms`,
                }}
                unmountOnExit
              >
                <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                  {fab.icon}
                </Fab>
              </Zoom>
            ))}
          </Box>
        </div>
      </div>
      <div className="header-login">
        <div className="login__cart"></div>
      </div>
      <div className="header-search">
        <img
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg"
          alt=""
        />
        <div className="search__input">
          <div className="input__select"></div>
          <select>
            <option value="">Barcha kategoriyalar</option>
          </select>
          <input type="text" />
          <button>
            <BsSearch />
          </button>
        </div>
        <ul className="search__links">
          <li className="links__item">
            <SiHackthebox /> <br />
            Buyurtma
          </li>
          <li onClick={show} className="links__item">
            <BsPerson /> <br />
            Kirish
          </li>
          <li className="links__item">
            <GiScales />
            <br />
            Taqqoslash
          </li>
          <li className="links__item">
            <BsSuitHeart /> <br />
            Sevimlilar
          </li>
          <li onClick={show2} className="links__item">
            <SlBasket />
            <br />
            Savatcha
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSearch;
