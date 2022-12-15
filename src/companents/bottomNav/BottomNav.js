import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./BottomNav.css";

const BottomNav = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="bottom-nav">
      <BottomNavigation
        sx={{ width: 100 + "%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Katalog"
          value="katalog"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Taqqoslash"
          value="taqqoslash"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Savatcha"
          value="savatcha"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Sevimlilar"
          value="sevimlilar"
          icon={<FolderIcon />}
        />
        <BottomNavigationAction
          label="Sevimlilar"
          value="sevimlilar"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
