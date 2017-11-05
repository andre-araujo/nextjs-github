import { Box } from 'grid-styled';

import Avatar from '../../elements/Avatar';
import UserInfoItem from '../../elements/UserInfoItem';

const UserInfo = ({
    data,
}) => (
    <section>
        <Avatar url={data.avatar_url} />
        <Box my="2rem">
            <ul>
                <UserInfoItem
                    title="Username:"
                    description={data.login}
                    url={data.html_url}
                />

                <UserInfoItem
                    title="Followers:"
                    description={data.followers}
                />

                <UserInfoItem
                    title="Following:"
                    description={data.following}
                />

                <UserInfoItem
                    title="Bio:"
                    description={data.bio}
                />

                <UserInfoItem
                    title="Email:"
                    description={data.email}
                />
            </ul>
        </Box>
    </section>
);

export default UserInfo;
