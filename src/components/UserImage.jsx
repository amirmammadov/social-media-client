import { Box } from "@mui/material";

import { API_URL } from "../constant/index";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`${API_URL}/assets/${image}`}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
