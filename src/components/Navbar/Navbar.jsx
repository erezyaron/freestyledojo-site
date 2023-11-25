import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
    <header>
     <div className='nav elementor-container elementor-column-gap-default'>
      <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6521b4d4">
        <div className="elementor-widget-wrap elementor-element-populated">
        <div className="elementor-element elementor-element-7174e40 elementor-tablet-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="7174e40" data-element_type="widget" data-widget_type="icon-list.default">
				<div className="elementor-widget-container">
            <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="https://goo.gl/maps/sbaAUU82DKgeaX3L8" target="_blank" rel="noreferrer">
                    <span className="elementor-icon-list-icon">
                        <i aria-hidden="true" className="fas fa-map-marker-alt"></i>						
                    </span>
                    <span className="elementor-icon-list-text">191 Geary Avenue, Toronto, ON M6H2C1</span>
                </a>
                </li>
            </ul>
        </div>
        </div></div></div>

        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-73b17ef6">
			<div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-1a8264da elementor-tablet-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1a8264da" data-element_type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
					<ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:647-245-8829">
                        <span className="elementor-icon-list-icon">
							<i aria-hidden="true" className="fas fa-phone"></i>						</span>
                            <span className="elementor-icon-list-text">647-245-8829</span>
                        </a>
                        </li>
                    </ul>
                </div>
				</div>
            </div>
		</div>

        </div>
        <div className="flex items-center space-x-4">
          {/* Insert social media icons here */}
        </div>
      
    </header>
    )
}

export default Navbar