import { Component } from 'react';

import {
    getRepoInfo,
    getOrigin,
} from '../../services/githubAPI';

import InnerLayout from '../../layouts/Inner';
import RepoDetails from '../../components/modules/RepoDetails';

export default class MyPage extends Component {
    static async getInitialProps(context) {
        const {
            username,
            reponame,
        } = context.query;

        const {
            req,
        } = context;

        const repoInfoResp = await getRepoInfo(getOrigin(req), `${username}/${reponame}`);
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

        return (
            <div>
                <InnerLayout title={` - ${repoInfo && repoInfo.name}`}>
                    {
                        notFound &&
                        <h2>Repository not found</h2>
                    }

                    {
                        repoInfo && repoInfo.name &&
                        <RepoDetails data={repoInfo} />
                    }
                </InnerLayout>
            </div>
        );
    }
}
