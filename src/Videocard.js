import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import "./Videocard.css";

function Videocard({thumbnail, channelImage, title, channelName, views, timeStamp}) {
    return (
        <div className="videocard">
            <img className="videocard__thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="videocard__info">
                <Avatar className="videocard__channelImage" alt="channelImage" src={channelImage} />
                <div className="videocard__text">
                    <h4 className="videoCard__title">{title}</h4>
                    <p className="videocard__channelName">{channelName}</p>
                    <p className="videocard__views">{views} views . {timeStamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
