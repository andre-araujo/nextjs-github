import Avatar from '../../elements/Avatar';
import UserInfoItem from '../../elements/UserInfoItem';

const UserInfo = ({
    data,
}) => (
    <section>
        <Avatar url={data.avatar_url} />

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
    </section>
);

export default UserInfo;
