import React from "react";
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    status: "President of Russian Federation",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieD-PIOeoAIVIOAV6w1jlTCtnKf2Dsa0xmw&usqp=CAU',
                    name: 'Vladimir',
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
                    },
                },
                {
                    id: 2,
                    followed: false,
                    status: "President of North Korea",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieD-PIOeoAIVIOAV6w1jlTCtnKf2Dsa0xmw&usqp=CAU',
                    name: 'Kim',
                    location: {
                        city: 'Pyongyang',
                        country: 'North Korea',
                    },
                },
                {
                    id: 3,
                    followed: false,
                    status: "President of USA",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieD-PIOeoAIVIOAV6w1jlTCtnKf2Dsa0xmw&usqp=CAU',
                    name: 'Joe',
                    location: {
                        city: 'Washington',
                        country: 'USA',
                    },
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} id={u.id} className={s.block}>
                <div className={s.leftColumn}>
                    <div className={s.avatar}><img src={u.avatar} alt=""/></div>
                    <div className={s.follow}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.rightColumn}>
                    <div className={s.container}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}

export default Users;



