import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import PageTitle from "../../../../../components/PageTitle";
import PageTitleWrapper from "../../../../../components/PageTitleWrapper";
import Footer from "../../../../../components/Footer";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CloudUpload } from "@mui/icons-material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import { VisuallyHiddenInput } from "./updateForm.styled";
import useAction from "./updateForm.hooks";

function Forms() {
  const {
    fetchCarData,
    handleSubmit,
    handleUploadCover,
    setFormValues,
    handleOptionsFormChange,
    handleSpecsFormChange,
    addOptionFields,
    addSpecFields,
    formValues,
    loadingCover,
    loadingSubmit,
    fileItem,
    optionsInputFields,
    specsInputFields,
  } = useAction();

  useEffect(() => {
    fetchCarData();
  }, []);

  console.log("Specs >>>", formValues?.specs);

  return (
    <>
      <Helmet>
        <title>Update - Binar Car Rental Admin</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Update a Car"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          docs="/management/products"
          actionElement={
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loadingSubmit}
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={handleSubmit}
            >
              Submit
            </LoadingButton>
          }
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Cars Details" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Box
                    sx={{
                      flex: "1", // Adjusted to take up remaining space equally
                      "& .MuiTextField-root": { m: 1 },
                    }}
                  >
                    <TextField
                      id="outlined-helperText"
                      name="plate"
                      label="Plate"
                      value={formValues?.plate}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          plate: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="manufacture"
                      label="Manufacture"
                      value={formValues?.manufacture}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          manufacture: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="model"
                      label="Model"
                      value={formValues?.model}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          model: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="type"
                      label="Type"
                      value={formValues?.type}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          type: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="description"
                      label="Description"
                      value={formValues?.description}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          description: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="transmission"
                      label="Transmission"
                      value={formValues?.transmission}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          transmission: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="capacity"
                      label="Capacity"
                      value={formValues?.capacity}
                      type="number"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          capacity: Number(e.target.value),
                        })
                      }
                    />
                    <TextField
                      id="outlined-input"
                      name="rentPerDay"
                      label="Rent /Day"
                      value={formValues?.rentPerDay}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          rentPerDay: e.target.value,
                        })
                      }
                    />
                    <Box>
                      <div>AVailable At: </div>
                      <DateTimePicker
                        value={
                          formValues?.availableAt
                            ? new Date(formValues.availableAt)
                            : null
                        }
                        onChange={(newValue) =>
                          setFormValues({
                            ...formValues,
                            availableAt:
                              newValue instanceof Date
                                ? newValue.toISOString()
                                : "",
                          })
                        }
                      />
                    </Box>
                    <Box>
                      <Stack direction={"row"} alignItems={"center"}>
                        <div>AVailable</div>
                        <Switch
                          name="available"
                          title="Available"
                          checked={formValues && formValues.available}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              available: e.target.checked,
                            })
                          }
                        />
                      </Stack>
                    </Box>
                    <TextField
                      id="outlined-input"
                      name="year"
                      label="Year"
                      type="number"
                      value={formValues?.year}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          year: Number(e.target.value),
                        })
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      flex: "1",
                      alignItems: "center",
                      alignContent: "center",
                      "& .MuiTextField-root": { m: 1, width: "45%" },
                    }}
                  >
                    <Box>
                      {optionsInputFields.map((input, index) => {
                        return (
                          <div key={index}>
                            <TextField
                              id="outlined-input"
                              name="option"
                              label="Option"
                              size="small"
                              placeholder="Example Option"
                              value={input.option}
                              onChange={(e) =>
                                handleOptionsFormChange(index, e)
                              }
                            />
                          </div>
                        );
                      })}
                      <Stack direction={"row"} alignItems={"center"}>
                        <Button onClick={addOptionFields}>Add More..</Button>
                      </Stack>
                    </Box>
                    <Box>
                      {specsInputFields.map((input, index) => {
                        return (
                          <div key={index}>
                            <TextField
                              id="outlined-input"
                              name="spec"
                              label="Spec"
                              size="small"
                              placeholder="Example Spec"
                              value={input.spec}
                              onChange={(e) => handleSpecsFormChange(index, e)}
                            />
                          </div>
                        );
                      })}
                      <Stack direction={"row"} alignItems={"center"}>
                        <Button onClick={addSpecFields}>Add More..</Button>
                      </Stack>
                    </Box>
                    <LoadingButton
                      component="label"
                      variant="contained"
                      startIcon={<CloudUpload />}
                      sx={{ mb: 3 }}
                      loading={loadingCover}
                    >
                      Upload Book Cover
                      <VisuallyHiddenInput
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleUploadCover}
                      />
                    </LoadingButton>
                    {formValues && formValues.image && (
                      <Box>
                        <img
                          src={
                            fileItem ? fileItem.secure_url : formValues.image
                          }
                          alt="preview"
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Forms;