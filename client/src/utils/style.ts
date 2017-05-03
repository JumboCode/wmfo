const GRAY = '#C8D3D5';
const WHITE = '#FFF';
const BLACK = '#000';

const BACKGROUND = GRAY;
const FONT_COLOR = WHITE;

export const Styles = {
    GRAY: GRAY,
    WHITE: WHITE,
    BLACK: BLACK,
    globalStyle: {
        backgroundColor: BACKGROUND,
        color: FONT_COLOR,
        height: '100%',
        width: '100%'
    },
    navbarStyle: {
        navbarGlobal: {
            background: GRAY,
            borderColor: BLACK
        }
    },
    inputBoxStyle: {
        padding: '10px',
        width: '90%',
        border: 'solid 1px #FFF',
        transition: 'box-shadow 0.3s, border 1.3s',
        color: 'black',
        borderRadius: '0.3em',
        margin: 'atu'
    },
    buttonStyle: {
        submitButton: {
            background: GRAY,
            display: 'inline-block',
            margin: '1%',
            borderRadius: 0,
            boxShadow: 'none',
            appearance: 'none',
            border: `solid 1px ${BLACK}`,
            paddingLeft: '10%',
            paddingRight: '10%',
            marginTop: '2%',
            fontSize: '1em'
        }
    }
};