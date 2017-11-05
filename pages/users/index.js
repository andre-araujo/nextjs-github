import { Component } from 'react';
import {
    Box,
    Flex,
} from 'grid-styled';

import { getUserInfo } from '../../services/githubAPI';

import MainLayout from '../../layouts/Main';
import UserInfo from '../../components/modules/UserInfo';

export default class MyPage extends Component {
    static async getInitialProps(context) {
        const { username } = context.query;

        const res = await getUserInfo(username);
        const userInfo = await res.json();
        return { userInfo };
    }

    render() {
        const {
            userInfo,
        } = this.props;

        return (
            <div>
                <MainLayout title={` - ${userInfo.login}`} />

                <Flex
                    width={[1, '40rem', '50rem', '60rem']}
                    mx="auto"
                >
                    <Box width={[1, 4 / 12]}>
                        <UserInfo data={userInfo} />
                    </Box>
                </Flex>
            </div>
        );
    }
}
