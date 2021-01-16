import React from 'react';

const ProfileInfoComponent = (props) => {
    const {profile} = props;
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.firstName + ' ' + profile.lastName}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.email}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.username}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        (320) 380-4539
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.address}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoComponent;