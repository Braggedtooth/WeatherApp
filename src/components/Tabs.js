import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Weatherinfo from './WeatherInfo'
import Context from '../context/Context';
import Title from './Title';
import HourData from './Hourdata';
import Weather1call from '../controllers/Weather1call';
import { Row } from 'react-bootstrap';
import Fivedaydata from './Fivedaydata'
import Searchform from './Searchform'
import CurrentData from './CurrentWeather';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    if (!localStorage.getItem('location')) {
        console.log('Location Not accessed')
    } else Weather1call() // checks if coordinate exists in localstorage and make a call to api


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
}));


export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const { weather, Err, err } = useContext(Context)
    /*   const weatherData = JSON.parse(sessionStorage.data)
 
     if (!weatherData) return
     const { daily, hourly, current } = weatherData.data
 
       console.log(weatherData); */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Current Weather" {...a11yProps(1)} />
                    <Tab label="Hourly Prognos" {...a11yProps(2)} />
                    <Tab label="5-Day Prognos" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="justify-content-between">
                        <div>
                            <h1> This app display weather information using your current location</h1>
                            <p> You can also search weather information of other places using the search bar below </p>
                            <p> You change from celsius to fahrenheit using the button below before your search.</p>
                        </div>
                        <Searchform />
                        {weather ? <Weatherinfo /> : <Title />}
                        {err && <Err error={err} />}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <h3> Current Weather</h3>
                    {CurrentData()}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <h3 className="justify-content-center">5 Hour prognos</h3>
                    <Row className="justify-content-center">
                        {HourData()}
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <h3 className="justify-content-center" >5-day Prognos</h3>
                    <Row className="justify-content-center">
                        {Fivedaydata()}
                    </Row>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
