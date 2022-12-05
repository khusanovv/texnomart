import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const HeaderKatalog = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="header-katalog">
        <Button className="katalog-btn" onClick={handleOpen}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0906 2.89307L13.0747 6.90888L17.0906 10.9247L21.1064 6.90888L17.0906 2.89307ZM11.7361 5.57028C10.9968 6.30956 10.9968 7.5082 11.7361 8.24748L15.7519 12.2633C16.4913 13.0026 17.69 13.0026 18.4292 12.2633L22.445 8.24748C23.1842 7.5082 23.1842 6.30956 22.445 5.57028L18.4292 1.55447C17.69 0.815177 16.4913 0.815177 15.7519 1.55447L11.7361 5.57028Z"
                fill="#333333"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.62575 4.06934H3.83961C3.31685 4.06934 2.89307 4.49312 2.89307 5.01588V8.80202C2.89307 9.32479 3.31685 9.74856 3.83961 9.74856H7.62575C8.1485 9.74856 8.57229 9.32479 8.57229 8.80202V5.01588C8.57229 4.49312 8.1485 4.06934 7.62575 4.06934ZM3.83961 2.17627C2.27134 2.17627 1 3.44761 1 5.01588V8.80202C1 10.3703 2.27134 11.6416 3.83961 11.6416H7.62575C9.19402 11.6416 10.4654 10.3703 10.4654 8.80202V5.01588C10.4654 3.44761 9.19402 2.17627 7.62575 2.17627H3.83961Z"
                fill="#333333"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.62575 15.4277H3.83961C3.31685 15.4277 2.89307 15.8515 2.89307 16.3743V20.1604C2.89307 20.6832 3.31685 21.107 3.83961 21.107H7.62575C8.1485 21.107 8.57229 20.6832 8.57229 20.1604V16.3743C8.57229 15.8515 8.1485 15.4277 7.62575 15.4277ZM3.83961 13.5347C2.27134 13.5347 1 14.806 1 16.3743V20.1604C1 21.7287 2.27134 23 3.83961 23H7.62575C9.19402 23 10.4654 21.7287 10.4654 20.1604V16.3743C10.4654 14.806 9.19402 13.5347 7.62575 13.5347H3.83961Z"
                fill="#333333"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9851 15.4277H15.199C14.6762 15.4277 14.2524 15.8515 14.2524 16.3743V20.1604C14.2524 20.6832 14.6762 21.107 15.199 21.107H18.9851C19.5079 21.107 19.9317 20.6832 19.9317 20.1604V16.3743C19.9317 15.8515 19.5079 15.4277 18.9851 15.4277ZM15.199 13.5347C13.6307 13.5347 12.3594 14.806 12.3594 16.3743V20.1604C12.3594 21.7287 13.6307 23 15.199 23H18.9851C20.5534 23 21.8247 21.7287 21.8247 20.1604V16.3743C21.8247 14.806 20.5534 13.5347 18.9851 13.5347H15.199Z"
                fill="#333333"
              ></path>
            </svg>
          </span>
          Katalog
        </Button>

        <ul className="katalog-list">
          <button className="katalog-week">
            <span>
              {" "}
              <BsFillLightningFill />
            </span>
            Sariq hafta
          </button>
          <li className="list__link">🔥AKSIYALAR</li>
          <li className="list__link"> SMARTFONLAR</li>
          <li className="list__link">MUZLATGICHLAR</li>
          <li className="list__link">СHANGYUTGICHLAR</li>
          <li className="list__link">XAVO SOVUTGICHLAR</li>
          <li className="list__link">TELEVIZORLAR</li>
          <li className="list__link">BARCHA KATEGORIYALAR</li>
        </ul>
        <Modal open={open} onClose={handleClose} className="katalog__modal">
          <Box className="modal-wrapper" sx={style}>
            <div className="modal-links">
              <ul>
                <li>Maishiy Texnika</li>
              </ul>
            </div>
            <div className="links__item">
              <h3>Maishiy texnika</h3>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default HeaderKatalog;
