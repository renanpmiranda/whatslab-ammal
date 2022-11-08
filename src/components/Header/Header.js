import videoCam from "../../assets/video-cam.svg"
import phoneCall from "../../assets/phone-call.svg"
import moreOptions from "../../assets/more-options.svg"
import { HeaderContainer, Select , Status } from "./Header-styled"

function Header (props) {
    const { senders, currentSender, onChangeSender } = props

    return(
        <HeaderContainer>
            <div className="sender-profile">
                <img src="https://picsum.photos/200/200" alt="profile-pic"/>
                <div>
                    <Select value={currentSender} onChange={onChangeSender}>
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </Select>
                    <Status>Online</Status>
                </div>
            </div>

            <div className="action-menu">
                <button>
                    <img src={videoCam} alt="video-cam-icon"/>
                </button>

                <button>
                    <img src={phoneCall} alt="phone-call-icon"/>
                </button>

                <button>
                    <img src={moreOptions} alt="more-options-icon"/>
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header