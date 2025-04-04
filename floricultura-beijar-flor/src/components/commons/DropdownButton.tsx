import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import '../styles/Header.css'
import { useRef, useState } from 'react';

interface FadeMenuProps {
  buttonLabel: string;    // Nome do botão
  menuItems: string[];    // Lista dos itens do menu
  bgColor: string;
  hoveredBgColor: string;
  height: number;
}

  declare module '@mui/material/styles' {
    interface Palette {
      pinkish: Palette['primary'];
    }
  
    interface PaletteOptions {
      pinkish?: PaletteOptions['primary'];
    }
}
  //metodos pra sobrescrever o estilo padrao dos botoes e aceitar customizados
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      pinkish: true;
    }
}
  
const theme = createTheme({
    palette: {
      pinkish: {
        main: '#FFFFFF',
        light:'rgb(148, 16, 16)',
        dark: '#A52C55',
      },
    },
});

function SetaCoresCasoHajaUma(color: string){
  return color? color : undefined
}

function SetaValorCasoHajaUm(number: number){
  return number? number : undefined
}

/**
 * 
 * @param {string} buttonLabel - Texto do botao
 * @param {string[]} menuItems - Itens que serao mostrados no dropdown
 * @param {string} bgColor - Cor default do botao 
 * @param {string} hoveredBgColor - Cordo botao ao sofrer um hover
 * @returns 
 */
export default function FadeMenu({ buttonLabel, menuItems, bgColor, hoveredBgColor, height }: FadeMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const buttonRef = useRef<HTMLButtonElement>(null); // Referência para capturar o botão
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (buttonRef.current) {
        const bgColor = window.getComputedStyle(buttonRef.current).backgroundColor;
        console.log("Cor do botão ao clicar:", bgColor);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button
        id="fade-button"
        ref={buttonRef}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined} 
        onClick={handleClick}
        variant='text'
        color="pinkish"
        sx= {{
          textTransform: "capitalize",
          borderRadius: 0,
          height: SetaValorCasoHajaUm(height),
          backgroundColor: SetaCoresCasoHajaUma (bgColor),
          ":active": {
              backgroundColor: SetaCoresCasoHajaUma (hoveredBgColor),
          },
          ":hover": {
              backgroundColor: SetaCoresCasoHajaUma (hoveredBgColor),
          }
        }}
        onMouseEnter={() => setIsHovered(true)}   // Ativa hover
        onMouseLeave={() => setIsHovered(false)}  // Desativa hover
        endIcon={anchorEl || isHovered ? <IoIosArrowDown color='white'></IoIosArrowDown> : <IoIosArrowForward color='white'></IoIosArrowForward>}  // Usa ternário diretamente
      >
        <p className='TextoBotaoNavBar'>{buttonLabel}</p>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      </ThemeProvider>
    </div>
  );
}
