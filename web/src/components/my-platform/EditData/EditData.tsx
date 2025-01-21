import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const EditData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/personal-info/1`
        );

        const userData = await response.json();
        reset(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = async (data: FormData) => {
    await fetch(
      `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/personal-info/1`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  if (isLoading) {
    return (
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit About Me
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value:
                  /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message:
                  "Invalid phone number format. Use international format (+CountryCode PhoneNumber)",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="phone"
                label="Phone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                multiline
                rows={1}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditData;
