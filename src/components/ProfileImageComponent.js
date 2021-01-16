import React from 'react';

const ProfileImageComponent = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                         className="rounded-circle" width="150"/>
                    <div className="mt-3">
                        <h4>{props.username}</h4>
                        <p className="text-secondary mb-1">{props.job}</p>
                        <p className="text-muted font-size-sm">{props.address}</p>
                        <button className="btn btn-info">Follow</button>
                        {' '}
                        <button className="btn btn-outline-info">Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileImageComponent;