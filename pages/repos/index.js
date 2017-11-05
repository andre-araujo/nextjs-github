import { Component } from 'react';

import {
    getRepoInfo,
} from '../../services/githubAPI';

import InnerLayout from '../../layouts/Inner';
import RepoDetails from '../../components/modules/RepoDetails';

export default class MyPage extends Component {
    static async getInitialProps(context) {
        const {
            username,
            reponame,
        } = context.query;

        const repoInfoResp = await getRepoInfo(`${username}/${reponame}`);
        const repoInfo = await repoInfoResp.json();

        if (repoInfo.message === 'Not Found') {
            return {
                notFound: repoInfo.message,
            };
        }

        return { repoInfo };
    }

    render() {
        const {
            repoInfo,
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
                <InnerLayout title={` - ${repoInfo.name}`}>
                    <RepoDetails data={repoInfo} />
                </InnerLayout>
            </div>
        );
    }
}
