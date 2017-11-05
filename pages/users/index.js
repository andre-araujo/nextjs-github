import { Component } from 'react';
import {
    Box,
    Flex,
} from 'grid-styled';

import {
    getUserInfo,
    getUserRepos,
} from '../../services/githubAPI';

import MainLayout from '../../layouts/Main';
import UserInfo from '../../components/modules/UserInfo';
import UserRepos from '../../components/modules/UserRepos';

export default class MyPage extends Component {
    static async getInitialProps(context) {
        const { username } = context.query;

        const userInfoResp = await getUserInfo(username);
        const userInfo = await userInfoResp.json();

        const userReposResp = await getUserRepos(username);
        const userRepos = await userReposResp.json();

        return {
            userInfo,
            userRepos,
        };
    }

    render() {
        const {
            userInfo,
            userRepos,
        } = this.props;

        return (
            <div>
                <MainLayout title={` - ${userInfo.login}`} />

                <Flex
                    width={[1, '40rem', '50rem', '60rem']}
                    mx="auto"
                    direction={['column', 'row']}
                >
                    <Box
                        mr={[0, '2rem']}
                        width={[1, 3 / 12]}
                    >
                        <UserInfo data={userInfo} />
                    </Box>

                    <Box width={[1, 9 / 12]}>
                        {<UserRepos data={userRepos || []} />}
                    </Box>
                </Flex>
            </div>
        );
    }
}
