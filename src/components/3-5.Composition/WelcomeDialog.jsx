import React from 'react'
import CustomDialog from './CustomDialog'
// import Dialog from './Dialog'
//단순하 children 을 return 해줌
export default function WelcomeDialog() {
    // return (
    //     <Dialog>
    //         <h1>welcome</h1>
    //         <h5>Thank you </h5>
    //     </Dialog>
    // )
    return (
        <CustomDialog title="welcome" description="Thanks"/>
    )
}
