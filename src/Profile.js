import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const StyledMenu = withStyles({
  paper: {
    marginTop: 10,
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: 30
  },
  itemIcon: {
    minWidth: 30
  }
}));

function Profile(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleHover(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [icons, setIcon] = React.useState([
    "/images/me1_gray.png",
    "/images/me2_gray.png",
    "/images/me3_gray.png",
    "/images/me4_gray.png",
    "/images/me5_gray.png"
  ]);

  function handleItemHoverOver(index) {
    const newIcons = icons.map((icon, i) => {
      if (i + 1 === index) {
        return `/images/me${index}.png`;
      }
      return icon;
    });

    setIcon(newIcons);
  }

  function handleItemHoverLeave(index) {
    const newIcons = icons.map((icon, i) => {
      if (i + 1 === index) {
        return `/images/me${index}_gray.png`;
      }
      return icon;
    });

    setIcon(newIcons);
  }

  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt="avatar"
        src="/images/bitmap5.png"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className={classes.avatar}
        onMouseOver={handleHover}
      />
      <StyledMenu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onMouseOver={() => handleItemHoverOver(1)} onMouseLeave={() => handleItemHoverLeave(1)}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={icons[0]} alt="participation" />
          </ListItemIcon>
          <ListItemText primary="My participation" />
        </StyledMenuItem>
        <StyledMenuItem onMouseOver={() => handleItemHoverOver(2)} onMouseLeave={() => handleItemHoverLeave(2)}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={icons[1]} alt="application" />
          </ListItemIcon>
          <ListItemText primary="My application" />
        </StyledMenuItem>
        <StyledMenuItem onMouseOver={() => handleItemHoverOver(3)} onMouseLeave={() => handleItemHoverLeave(3)}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={icons[2]} alt="Resume" />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </StyledMenuItem>
        <StyledMenuItem onMouseOver={() => handleItemHoverOver(4)} onMouseLeave={() => handleItemHoverLeave(4)}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={icons[3]} alt="Settings" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem
          onMouseOver={() => handleItemHoverOver(5)}
          onMouseLeave={() => handleItemHoverLeave(5)}
          onClick={props.logout}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img src={icons[4]} alt="Logout" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default Profile;
