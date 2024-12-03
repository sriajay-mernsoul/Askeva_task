import React, { useState } from "react";
import "./style.css";
import {
    Grid,
    Avatar,
    TextField,
    Autocomplete,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Paper,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem
} from "@mui/material";
import { green } from "@mui/material/colors";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import FilterListIcon from "@mui/icons-material/FilterList";
import Divider from '@mui/material/Divider';
import askeva from "../assets/askeva.jpg"

const names = ["Dummy", "Dummy"];

const chatData = [
    { name: "Karthikapalanikumar", message: "Please provide your delivery address for your...", date: "03/12/2024" },
    { name: "Yuvaraj Dharmaraj", message: "Your order has been successfully placed...", date: "03/12/2024" },
    { name: "GOKUL", message: "Hello GOKUL! 🙏 I'm EVA, your...", date: "03/12/2024" },
    { name: "JS FOODS BY BHUVANA", message: "Thanks for your order please complete the...", date: "03/12/2024" },
    { name: "Mk", message: "Hello Mk! 🙏 I'm EVA, your...", date: "03/12/2024" },
    { name: "subbash", message: "Hello subbash! 🙏 I'm EVA, your...", date: "03/12/2024" },
    { name: "Ananthu.Ap", message: "Heyyy", date: "02/12/2024" },
];

function MessageContent() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(chatData);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");


    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchTerm(query);


        const filteredChats = chatData.filter((chat) =>
            chat.name.toLowerCase().includes(query)
        );
        setFilteredData(filteredChats);
    };


    const handleFilterMenuOpen = (event) => {
        setFilterAnchorEl(event.currentTarget);
    };


    const handleFilterSelect = (order) => {
        setSortOrder(order);
        setFilterAnchorEl(null);

        const sortedData = [...filteredData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === "asc" ? dateA - dateB : dateB - dateA;
        });
        setFilteredData(sortedData);
    };


    const handleFilterMenuClose = () => {
        setFilterAnchorEl(null);
    };


    return (
        <>
            <Box>
                <AppBar className="app-bar" position="static">
                    <Toolbar>

                        <Grid container
                            xs={12} sm={4} md={3.8}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                            <TextField
                                fullWidth
                                placeholder="Search or start a new chat"
                                variant="outlined"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                            <IconButton onClick={handleFilterMenuOpen}>
                                                <FilterListIcon className="icon" />
                                            </IconButton>
                                        </InputAdornment>

                                    ),
                                }}
                                sx={{
                                    borderRadius: 80,
                                    padding: "10px 12px",
                                    backgroundColor: "#fff",
                                    "& .MuiOutlinedInput-root": {
                                        height: "40px",
                                        padding: "10px 12px",
                                    },
                                    "& .MuiInputBase-input": {
                                        padding: "10px 0",
                                    },
                                }}
                            />


                        </Grid>

                        <Divider orientation="vertical" color="black" variant="middle" flexItem />

                        <Grid
                            container
                            xs={12} sm={5} md={5}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <IconButton
                                size="large"

                                className="icon-button"
                                aria-label="menu"
                            >
                                <Avatar src="/broken-image.jpg" className="avatar" />
                            </IconButton>
                            <Typography variant="h6" component="div" className="typography">
                                +919042498025
                            </Typography>
                        </Grid>


                        <Grid
                            container
                            xs={12} sm={4.5} md={5}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            sx={{ mt: { xs: 2, sm: 0 } }}
                        >
                            <Autocomplete
                                disablePortal
                                disabled
                                options={names}
                                className="autocomplete-container"
                                renderInput={(params) => <TextField {...params} placeholder="Assign Agent" />}
                            />
                        </Grid>


                        <Grid
                            container
                            xs={12} sm={2.5} md={2}
                            sx={{ padding: "15px", mt: { xs: 2, sm: 0 } }}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Avatar sx={{ bgcolor: green[400] }} className="right-avatar">
                                <RemoveRedEyeIcon className="icon" />
                            </Avatar>
                            <MoreVertIcon className="icon" />
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleFilterMenuClose}
            >
                <MenuItem onClick={() => handleFilterSelect("asc")}>Sort by Date (Ascending)</MenuItem>
                <MenuItem onClick={() => handleFilterSelect("desc")}>Sort by Date (Descending)</MenuItem>
            </Menu>



            <Grid xs={12} container justifyContent={"center"}>

                {/* Chat List */}
                <Grid xs={3}>
                    <Paper
                        elevation={3}
                        style={{
                            maxWidth: 400,
                            margin: "20px auto",
                            borderRadius: 10,
                            padding: "10px 0",
                            backgroundColor: "#F9F9F9",
                        }}
                    >
                        <div
                            style={{
                                maxHeight: 620,
                                overflowY: "auto",
                            }}
                        >


                            <List>
                                {filteredData.map((chat, index) => (
                                    <ListItem key={index} alignItems="flex-start" divider>
                                        <ListItemAvatar>
                                            <Avatar>{chat.name.charAt(0)}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant="subtitle1"
                                                    className="list-item-primary list-item-primary-responsive"
                                                >
                                                    {chat.name}
                                                </Typography>
                                            }
                                            secondary={
                                                <>
                                                    <Typography
                                                        variant="body2"
                                                        className="list-item-message list-item-message-responsive"
                                                    >
                                                        {chat.message}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        className="list-item-date list-item-date-responsive"
                                                    >
                                                        {chat.date}
                                                    </Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>

                        </div>
                    </Paper>
                </Grid>

                {/* Chat Content */}
                <Grid xs={9}>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "calc(100vh - 94px)",
                            maxHeight: 650,
                            backgroundColor: "#f0f0f0",
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                overflowY: "auto",
                                padding: "10px",
                                backgroundColor: "#e5ddd5",
                                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
                            }}
                        >

                            <Typography
                                align="center"
                                sx={{
                                    fontSize: "12px",
                                    margin: "8px 0",
                                    color: "#8d8d8d",
                                }}
                            >
                                03/12/2024
                            </Typography>

                            {/* Incoming Message */}
                            <Grid container spacing={1} alignItems="center">

                                <Grid item>
                                    <Box
                                        sx={{
                                            padding: "8px 12px",
                                            backgroundColor: "#fff",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <Typography variant="body2" color="textPrimary">
                                            Hi
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "10px",
                                                color: "#8d8d8d",
                                            }}
                                        >
                                            10:56 AM
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* Outgoing Message */}
                            <Grid container spacing={1} justifyContent="flex-end">

                                <Grid item>
                                    <Box
                                        sx={{
                                            padding: "8px 12px",
                                            backgroundColor: "#dcf8c6",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <Typography variant="body2" color="textPrimary">
                                            <img src={askeva} alt="logo" width="200px" height="200px" /><br />
                                            Hello Subbash! Vanakkam 🙏<br />
                                            I'm EVA, your Executive Virtual
                                            Assistant 🤖<br /> Welcome to AskEVA. I am here to help you<br /> with
                                            any Support related to AskEVA 😊
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "10px",
                                                color: "#8d8d8d",
                                                textAlign: "right"
                                            }}
                                        >
                                            01:07 PM <FontAwesomeIcon color="blue" icon={faCheckDouble} />
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>

                        {/* Intervene Button */}
                        <Box
                            sx={{
                                textAlign: "center",
                                margin: "15px",
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#4caf50",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#45a049",
                                    },
                                }}
                            >
                                Intervene
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default MessageContent;
