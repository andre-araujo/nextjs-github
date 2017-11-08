import { Component } from 'react';
import {
    Box,
    Flex,
} from 'grid-styled';

import {
    getUserInfo,
    getUserRepos,
    getOrigin,
} from '../../services/githubAPI';

import InnerLayout from '../../layouts/Inner';
import UserInfo from '../../components/modules/UserInfo';
import UserRepos from '../../components/modules/UserRepos';

export default class MyPage extends Component {
    static async getInitialProps(context) {
        const {
            username,
            sort,
        } = context.query;

        const {
            req,
        } = context;

        const sortBy = sort && sort.replace('repos-by-', '');

        const userInfoResp = await getUserInfo(getOrigin(req), username);
        const userInfo = await userInfoResp.json();

        if (userInfo.message === 'Not Found') {
            return {
                notFound: userInfo.message,
            };
        }

        const userReposResp = await getUserRepos(getOrigin(req), username, sortBy);
        let userRepos = await userReposResp.json();

        userRepos = userRepos.items || [];

        return {
            userInfo,
            userRepos,
        };
    }

    render() {
        const {
            userInfo,
            userRepos,
            notFound,
        } = this.props;

        if (notFound) {
            return (
                <div>
                    <InnerLayout title={` - ${notFound}`}>
                        {
                            notFound &&
                            <h2>{ notFound }</h2>
                        }
                    </InnerLayout>
                </div>
            );
        }

        return (
            <div>
                <InnerLayout title={` - ${userInfo.login}`}>

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
                </InnerLayout>
            </div>
        );
    }
}
