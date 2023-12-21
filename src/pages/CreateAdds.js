import React, { useState } from "react";
import AdCard from "../components/AdCard";
import styles from "./CreateAdds.module.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const CreateAdds = () => {
  const navigate = useNavigate();
  const [mediaChecked, setMediaChecked] = useState(false);
  const [textChecked, setTextChecked] = useState(false);

  const handleChangeMediaAd = (event) => {
    setMediaChecked(event.target.checked);
  };

  const handleChangeTextAd = (event) => {
    setTextChecked(event.target.checked);
  };

  const handleNext = () => {
    if (mediaChecked === false && textChecked === false) {
      toast.error("Please select ad to create");
    } else if (mediaChecked === true) {
      navigate("/media-ad");
    } else if (textChecked === true) {
      navigate("/text-ad");
    } else {
      navigate("/media-ad");
    }
  };

  return (
    <>
      <div className={styles.cards}>
        <AdCard
          type="Media Ad"
          image="/images/mediaAdd.webp"
          checked={mediaChecked}
          handleChange={handleChangeMediaAd}
        />
        <AdCard
          type="Text Ad"
          image="/images/textAdd.webp"
          checked={textChecked}
          handleChange={handleChangeTextAd}
        />
      </div>
      <Box display="flex" justifyContent="flex-end" margin={2}>
        <Button variant="contained" onClick={handleNext}>
          NEXT
        </Button>
      </Box>
    </>
  );
};

export default CreateAdds;
