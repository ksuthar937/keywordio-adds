import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const MediaAd = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    heading1: "",
    heading2: "",
    description: "",
    landscapeImageURL: "",
    portraitImageURL: "",
    squareImageURL: "",
    videoURL: "",
    businessName: "",
    buttonLabel: "",
    websiteURL: "",
  });

  const handleInputs = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted");
  };

  return (
    <div>
      <Typography variant="h6" align="center" margin={1}>
        Create Text & Media Ad
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Heading 01
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add a heading that would make users interested"
            variant="outlined"
            size="small"
            name="heading1"
            value={inputs.heading1}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Heading 02
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add a heading that would make users interested"
            variant="outlined"
            size="small"
            name="heading2"
            value={inputs.heading2}
            onChange={handleInputs}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Description 01
          </Typography>
          <TextField
            id="outlined-multiline-static"
            placeholder="Add primary text to help users understand more about your products, services or offers"
            variant="outlined"
            size="small"
            multiline
            rows={4}
            name="description"
            value={inputs.description}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Landscape Marketing Image (1.9:1)
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add the URL of the Image you want to use for the ad"
            variant="outlined"
            size="small"
            name="landscapeImageURL"
            value={inputs.landscapeImageURL}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Portrait Marketing Image (4:5)
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add the URL of the Image you want to use for the ad"
            variant="outlined"
            size="small"
            name="portraitImageURL"
            value={inputs.portraitImageURL}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Square Marketing Image (1:1)
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add the URL of the Image you want to use for the ad"
            variant="outlined"
            size="small"
            name="squareImageURL"
            value={inputs.squareImageURL}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Video URL
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add the URL of the Video you want to use for the ad"
            variant="outlined"
            size="small"
            name="videoURL"
            value={inputs.videoURL}
            onChange={handleInputs}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Business Name
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add your business name"
            variant="outlined"
            size="small"
            name="businessName"
            value={inputs.businessName}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Button Label
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Select a label that best suits your ad"
            variant="outlined"
            size="small"
            name="buttonLabel"
            value={inputs.buttonLabel}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin={1}
          gap={1}
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            align="left"
            variantMapping={{ h6: "h6" }}
          >
            Website URL
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Add the URL of the landing page you want to redirect users to"
            variant="outlined"
            size="small"
            name="websiteURL"
            value={inputs.websiteURL}
            onChange={handleInputs}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          margin={4}
          gap={1}
          marginBottom={2}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/createadds")}
          >
            Back
          </Button>
          <Button variant="contained" color="info" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default MediaAd;
