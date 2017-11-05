import {
    Wrapper,
    Label,
    Option,
} from './styles';

const Sort = () => (
    <Wrapper>
        <Label>Sort by:</Label>

        <ul>
            <Option active>Stars</Option>
            <Option>Name</Option>
        </ul>

    </Wrapper>
);

export default Sort;
