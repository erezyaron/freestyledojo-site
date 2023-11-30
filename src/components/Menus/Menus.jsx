import './Menus.css'
import {Menu, MenuContainer, MenuSpacer, MenuButton ,MenuImage, MenuItem, DropdownMenu } from './MenusElements';

const Menus = () => {
    return (
    <Menu>
        <MenuContainer>
            <MenuImage src="/assets/FS-LOGO.png" alt="Freestyle Dojo Logo" title="Freestyle Dojo Logo" />
            <MenuSpacer />
            <div className="menu-item-wrapper">
            <DropdownMenu label={"Schedule"} onClick="/schedule">
            <MenuItem to="/book-a-class">Book a Class</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper">
            <DropdownMenu label={"Programs"} onClick="/programs">
            <MenuItem to="/toronto-jiu-jitsu-classes">Jiu Jitsu</MenuItem>
            <MenuItem to="/toronto-kickboxing-classes">Kickboxing</MenuItem>
            <MenuItem to="/toronto-fitness-classes">Fitness</MenuItem>
            <MenuItem to="/toronto-kids-martial-arts">Kids Classes</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper">
            <DropdownMenu label={"About"} onClick="/about-freestyle-dojo">
            <MenuItem to="/events">Events</MenuItem>
            </DropdownMenu>
            </div>
            <div className="menu-item-wrapper-no-border">
            <MenuButton label="Gym Rentals" onClick="/gym-rentals" />
            </div>
            <MenuSpacer />
            <div className="menu-item-wrapper-no-border">
            <MenuButton label="Free Trial Class" onClick="/contact-free-trial-class" variant="white-border" />
            </div>
        </MenuContainer>
    </Menu>
    )
}

export default Menus