import React from 'react';

// TODO add a nice form library ()

const RequestViewingForm = ({house}) => {
    return (
        <div>
            <h3>Request a viewing for this house</h3>

            <p><strong>Your Name</strong><br/>
                <input type="text" name="name"/>
            </p>

            <p><strong>Your Email</strong><br/>
                <input type="text" name="email"/>
            </p>

            <input type="submit" />

        </div>
    )
};

export default RequestViewingForm;