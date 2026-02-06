import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { addUser, User } from "../Store/userSlice.ts";
import {
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const UserPage: React.FC = () => {
  const users = useSelector((state: RootState) => state.userStore.users);
  const dispatch = useDispatch<AppDispatch>();

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      dispatch(addUser(formData));
      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {/* LEFT SIDE: Array of Object Elements */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, minHeight: "400px" }}>
            <Typography variant="h5" gutterBottom>
              User List
            </Typography>
            <Divider />
            <List>
              {users.map((user: User) => (
                <ListItem key={user.id}>
                  <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={`${user.phoneNumber} | ${user.address}`}
                  />
                </ListItem>
              ))}
              {users.length === 0 && (
                <Typography sx={{ mt: 2, color: "gray" }}>
                  No users added yet.
                </Typography>
              )}
            </List>
          </Paper>
        </Grid>

        {/* RIGHT SIDE: The Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Add New User
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="First Name"
                  fullWidth
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                <TextField
                  label="Address"
                  fullWidth
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                <TextField
                  label="Phone Number"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserPage;
