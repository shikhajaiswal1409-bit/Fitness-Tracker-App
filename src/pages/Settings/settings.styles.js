import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SettingsContainer = styled(Box)(()=>({
    display: "flex",
    flexDirection: "column",
justifyContent: "center",  // horizontal center
alignItems: "center",    // vertical center
    height: "80vh" 
}))

export const ProfileCard = styled(Box)(()=>({
    background: "#ffffff",
    borderRadius: "16px",
    padding: "50px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    border: "1px solid #e6e8f0",
    width: "50%",

    
}))

export const Title = styled(Box)(()=>({
    fontSize: "40px",
    fontWeight: "800",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    color: "#315a97",

}))

export const FormContainer = styled(Box)(()=>({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}))

export const FormRow = styled(Box)(()=>({
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    
}))

export const SaveButton = styled(Box)(()=>({
    display: "flex",
    // flexDirection: "column",
// alignItems: "center",
justifyContent: "flex-end",
marginTop: "40px",


}))