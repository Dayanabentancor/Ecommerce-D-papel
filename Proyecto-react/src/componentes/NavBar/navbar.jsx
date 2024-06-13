import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Menú
  </MenuButton>
  <MenuList>
    <MenuItem>Packaging</MenuItem>
    <MenuItem>Branding</MenuItem>
    <MenuItem>Productos digitales</MenuItem>
  
  </MenuList>
</Menu>
      <CartWidget/>
    </div>
  )
}

export default NavBar
