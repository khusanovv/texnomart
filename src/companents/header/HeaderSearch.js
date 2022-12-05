import React from "react";
import { BsSearch } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";
import { SlBasket } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { GiScales } from "react-icons/gi";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const HeaderSearch = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
          <li className="links__item">
            <BsPerson /> <br />
            <Button onClick={handleOpen}>Kirish</Button>
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
          <li className="links__item">
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
