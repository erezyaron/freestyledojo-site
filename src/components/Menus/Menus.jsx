import './Menus.css'
import {Menu, MenuContainer, MenuSpacer, MenuButton ,MenuImage, MenuItem, DropdownMenu } from './MenusElements';

const Menus = () => {
    return (
    <Menu>
        <MenuContainer>
            
            <MenuImage src="src/assets/FS-LOGO.png" alt="Freestyle Dojo Logo" />
            <MenuSpacer />
            <div className="menu-item-wrapper">
            <DropdownMenu label={"Schedule"}>
            <MenuItem>Book a Class</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper">
            <DropdownMenu label={"Programs"}>
            <MenuItem>Jiu Jitsu</MenuItem>
            <MenuItem>Kickboxing</MenuItem>
            <MenuItem>Fitness</MenuItem>
            <MenuItem>Kids Classes</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper">
            <DropdownMenu label={"About"}>
            <MenuItem>Events</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper-no-border">
            <MenuButton label="Gym Rentals" onClick={alert} />
            </div>
            <MenuSpacer />
            <div className="menu-item-wrapper-no-border">
            <MenuButton label="Free Trial Class" onClick={alert} variant="white-border" />
            </div>
        </MenuContainer>
    </Menu>
    )
}

export default Menus