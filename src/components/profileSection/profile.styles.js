import styled from "@emotion/styled";
import { Box } from '@mui/system';


export const Card = styled(Box)(()=>({
    background: "white",
      boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
    borderRadius: "14px",
    padding: "16px",
    marginBottom: "20px",
    position: "relative"
}))

export const EditText = styled(Box)(()=>({
    position: "absolute",
    right: "20px",
    top: "17px",
    color: "#f56161",
    fontWeight: 600,
    fontSize: "20px",
    cursor: "pointer"
}))

export const Container = styled(Box)(()=>({
    display: "flex",
marginTop: "15px",
justifyContent: "space-between",
border: "2px"

}))

export const Item = styled(Box)(()=>({
    textAlign: "center"

}))

export const Label = styled(Box)(()=>({
    color: "#18aeea",
}))

export const Value = styled(Box)(()=>({
    fontSize: "20px",
    fontWeight: 600

}))
