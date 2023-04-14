import React, {ReactNode, useState} from 'react';
import s from './Ava.module.scss'
import {Container} from "./Container/Container";
import {Search} from "./Search/Search";
import {GithubError, GithubUser, LocalGithubUser} from "../../types/userGit";
import {UserCard} from "./UserCard/UserCard";
import {isGithubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/exract-local-user";
import {defaultUser} from "./mock";
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";

const BASE_URL = 'https://api.github.com/users/'

type PropsType = {
    children?: ReactNode
    isAuth: boolean
}
export function Ava(props: PropsType) {
    const [userGit, setUserGit] = useState<LocalGithubUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = await res.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {
            setUserGit(extractLocalUser(user));
        } else {
            setUserGit(null);
        }
    }
    return (
        <div className={s.ava}>
            { props.isAuth
                ? <Container>

                    <Search hasError={!userGit} onSubmit={fetchUser}
                    />

                    {userGit && (
                        <UserCard
                            {...userGit}
                        />
                    )}

                </Container>
                : <div className={s.avaLogin}>{'NO LOGIN.....'}</div>
            }
            <ThemeSwitcher />
        </div>
    )
}