import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  HeaderContainer,
  LeftSection,
  RightSection,
  Title,
} from "./Header.styles";

const Header = () => {

  //  Refresh handler
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <HeaderContainer>

      <LeftSection>
        <Title>
          TRACK <span style={{fontWeight: "800", color: "#000000"}}>FITNESS</span>
        </Title>
      </LeftSection>

      <RightSection>

        <IconButton onClick={handleRefresh}>
          <RefreshIcon />
        </IconButton>

      </RightSection>

    </HeaderContainer>
  );
};

export default Header;