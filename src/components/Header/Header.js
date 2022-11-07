function Header (props) {
    const { senders, currentSender, onChangeSender } = props

    return(
        <header>
            <div>
                <img src="https://picsum.photos/200/200" alt="profile-pic"/>
                <div>
                    <select value={currentSender} onChange={onChangeSender}>
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </select>
                    <p>Online</p>
                </div>
            </div>
        </header>
    )
}

export default Header