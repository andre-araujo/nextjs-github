import { Component } from 'react';
import { getUserInfo } from '../../services/githubAPI';

import MainLayout from '../../layouts/Main';
import Avatar from '../../components/elements/Avatar';
import InfoListItem from '../../components/elements/InfoListItem';

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
                <MainLayout title={` - ${userInfo.login}`}>
                    <Avatar url={userInfo.avatar_url} />

                    <ul>
                        <InfoListItem
                            title="Username:"
                            description={userInfo.login}
                            url={userInfo.htmlUrl}
                        />

                        <InfoListItem
                            title="Followers:"
                            description={userInfo.followers}
                            url={userInfo.followers_url}
                        />

                        <InfoListItem
                            title="Following:"
                            description={userInfo.following}
                            url={userInfo.following_url}
                        />

                        <InfoListItem
                            title="Bio:"
                            description={userInfo.bio}
                        />

                        <InfoListItem
                            title="email:"
                            description={userInfo.email}
                        />
                    </ul>
                </MainLayout>
            </div>
        );
    }
}
