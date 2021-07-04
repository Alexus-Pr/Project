// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ReactPlayer from 'react-player';
// import backgroundVideo from './background.mp4';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '80%',
//     height: '100vh',
//     position: 'relative',
//     '& video': {
//       objectFit: 'cover',
//     },
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   title: {
//     paddingBottom: theme.spacing(4),
//   },
// }));

// const Back = () => {
//   const classes = useStyles();

//   return (
//     <section>
//       <ReactPlayer
//         url={backgroundVideo}
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//       />
//       <div className={classes.overlay}></div>
//     </section>
//   )
// };

// export default Back;