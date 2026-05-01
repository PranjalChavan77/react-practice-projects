import React from 'react'
import Section1 from './components/Section1/Section1';

const App = () => {
    const users = [
        {
            img: "https://images.unsplash.com/photo-1665224751693-188bbfd68349?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Prime customers, that have access to bank credit and are satisfied with current product",
            tag: "Satisfied"
        },
        {
            img: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBiYWNrZ3JvdW5kJTIwY29ycG9yYXRlJTIwd29tZW4lMjB2ZXJ0aWNhbCUyMGltYWdlfGVufDB8fDB8fHwwhttps://plus.unsplash.com/premium_photo-1682094831698-666b8850676a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Prime customers, that have access to bank credit and are not satisfied with current product",
            tag: "Undeserved"
        },
        {
            img: "https://images.unsplash.com/photo-1665224752561-85f4da9a5658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmQlMjBjb3Jwb3JhdGUlMjB3b21lbiUyMHZlcnRpY2FsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
            intro: "Customers from near-prime and sub-prime segments with no access to bank credit",
            tag: "Underbanked"
        },
        {
            img: "https://images.unsplash.com/photo-1562935345-5080389daccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBiYWNrZ3JvdW5kJTIwY29ycG9yYXRlJTIwd29tZW4lMjB2ZXJ0aWNhbCUyMGltYWdlfGVufDB8fDB8fHww",
            intro: "Customers from near-prime and sub-prime segments with no access to bank credit",
            tag: "Satisfied"
        },
        {
            img: "https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Prime customers, that have access to bank credit and are not satisfied with current product",
            tag: "Undeserved"
        },
    ];
    return (
        <div>
            <Section1 users={users}/>

        </div>
    )
}

export default App;