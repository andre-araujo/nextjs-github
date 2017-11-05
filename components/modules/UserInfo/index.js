import Avatar from '../../elements/Avatar';
import InfoListItem from '../../elements/InfoListItem';

const UserInfo = ({
    data,
}) => (
    <section>
        <Avatar url={data.avatar_url} />

        <ul>
            <InfoListItem
                title="Username:"
                description={data.login}
                url={data.htmlUrl}
            />

            <InfoListItem
                title="Followers:"
                description={data.followers}
                url={data.followers_url}
            />

            <InfoListItem
                title="Following:"
                description={data.following}
                url={data.following_url}
            />

            <InfoListItem
                title="Bio:"
                description={data.bio}
            />

            <InfoListItem
                title="email:"
                description={data.email}
            />
        </ul>
    </section>
);

export default UserInfo;
