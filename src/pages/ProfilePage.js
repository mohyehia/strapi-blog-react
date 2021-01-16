import React, {Component, Fragment} from 'react';
import './profile.css';
import ProfileImageComponent from "../components/ProfileImageComponent";
import ProfileSocialContact from "../components/ProfileSocialContact";
import ProfileInfoComponent from "../components/ProfileInfoComponent";
import ProfileProjectStatusComponent from "../components/ProfileProjectStatusComponent";
import {connect} from "react-redux";

class ProfilePage extends Component {
    render() {
        const {profile} = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="main-body">

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <ProfileImageComponent username={profile.username} job={profile.job}
                                                       address={profile.address}/>
                                <ProfileSocialContact profile={profile}/>
                            </div>
                            <div className="col-md-8">
                                <ProfileInfoComponent profile={profile}/>
                                <div className="row gutters-sm">
                                    <ProfileProjectStatusComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        profile: user.profile
    }
}
const Profile = connect(mapStateToProps)(ProfilePage);
export {Profile};