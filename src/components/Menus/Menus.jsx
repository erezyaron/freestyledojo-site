import './Menus.css'
import {Menu, MenuContainer, MenuSpacer, MenuButton ,MenuImage, MenuItem, DropdownMenu } from './MenusElements';

const Menus = () => {
    return (
    <Menu>
        <MenuContainer>
            
            <MenuImage src="src/assets/FS-LOGO.png" alt="Freestyle Dojo Logo" />
            <DropdownMenu>
            <MenuItem>Link 1</MenuItem>
            {/* More MenuItems */}
            </DropdownMenu>
            {/* Another DropdownMenu for other links */}
            <MenuButton label="Button" onClick={alert} />
            <MenuSpacer />
        </MenuContainer>
    </Menu>
    )
}

export default Menus