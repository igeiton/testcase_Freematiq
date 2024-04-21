// UI components
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Container, MenuItem, Paper, Typography, styled } from '@mui/material';

export const PaperSX = styled(Paper)({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    gap: 10,
    padding: '25px 10px',
    borderRadius: 10,
});

export const ContainerSX = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
});

export const HighlightOffIconSX = styled(HighlightOffIcon)({
    position: 'absolute',
    right: 0,
    top: 0,
    cursor: 'pointer',
    opacity: 0.33,
    transition: 'linear 0.15s',
    '&:hover': {
        color: 'red',
    },
});

export const MenuItemSX = styled(MenuItem)({
    width: '100%',
    margin: 0,
    padding: '5px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
});

export const TypographySX = styled(Typography)({
    width: '100%',
    justifySelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
});
