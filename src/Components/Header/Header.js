import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import Panda from '../../Assets/Images/—Pngtree—panda xiong bao baby hand-painted_3860457.png';

const usestyles = makeStyles(theme => ({
    header: {
        background: 'rgba(0,0,0,.4)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 5px 5px 0 rgba(0,0,0, .9)',
        color: 'white',
        padding: 0,
    },
    brand: {
        // flexGrow: 1
    },
    bigAvatar: {
        padding: 5,
        width: 60,
        height: 60,
    },
    title: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1),
        fontWeight: 900,
        background: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(218,162,105,1) 100%)',

    },
}));

const header = (props) => {
    const classes = usestyles();
    return (
        <Fragment>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Avatar src={Panda} alt="Panda" className={classes.bigAvatar} />
                    <Typography variant="h4" className={classes.title}>
                        Tic Tac Toe
                    </Typography>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        disabled={props.gameStarted}
                        onClick={props.onStartClick}>
                        Start
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        disabled={!props.gameStarted}
                        onClick={props.onResetClick}>
                        Reset
                    </Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

const mapStatetoProps = (state) => {
    return {
        gameStarted: state.gameStarted
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onStartClick: () => dispatch(actionCreators.startClicked()),
        onResetClick: () => dispatch(actionCreators.resetClicked()),
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(header);