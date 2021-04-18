import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashRouter, Link } from 'react-router-dom';

const TabsComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <HashRouter>
              <Nav className="justify-content-end ml-auto mr-4">
                <Nav.Link><Link className="navLinks" to="/">HOME</Link></Nav.Link>
                <Nav.Link><Link className="navLinks" to="/about">ABOUT US</Link></Nav.Link>
                <Nav.Link><Link className="navLinks" to="/about">SERVICES</Link></Nav.Link>
                <Nav.Link><Link className="navLinks" to="/about">GALLERY</Link></Nav.Link>
                <Nav.Link><Link className="navLinks" to="/about">CONTACT US</Link></Nav.Link>
                <Nav.Link><Link className="navLinks" to="/about">COVID-19</Link></Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
            </HashRouter>
          </Navbar.Collapse>
        </Container>
        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
      </Navbar>
    </div>
  )
}

export default TabsComponent;


/* import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Item Two" {...a11yProps('two')} />
          <Tab value="three" label="Item Three" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}

export default TabsComponent;
 */

