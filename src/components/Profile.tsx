import React from "react";
function Profile({description}: { description: string }) {
    return (
        <div className="profile">
            <h2 className="point">Profile</h2>
            <div className="profile-desc">
                {description}
            </div>
        </div>
    );
}

export default Profile;