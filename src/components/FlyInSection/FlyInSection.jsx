import './FlyInSection.css'
import ActionButton from './ActionButton'

const FlyInSection = () => {
    return (
        <div className='widget-wrap'>
            <div className='widget'>
                <div className='widget-container'>
                    <div className='widget-separator'>
                        <span className='widget-span-separator'></span>
                    </div>
                </div>
            </div>
            <div className='fly-in'>
                <h2 className='fly-in-title'>Kickboxing & Jiu Jitsu Classes</h2>
                <h1 className='fly-in-section'>An Innovative Martial Arts Gym In Toronto</h1>
                <div className='button-container'>
                <ActionButton label="Free Trial Class" onClick={alert} />
                <ActionButton label="Seminars" onClick={alert} />
                <ActionButton label="Book a Class" onClick={alert} />
                </div>
            </div>
        </div>
    )
}

export default FlyInSection