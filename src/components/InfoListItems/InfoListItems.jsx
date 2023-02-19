export function InfoListItems({ info: { name, job } }) {
    return (
        <li>
            <span>{name}</span>
            <span>{job}</span>
        </li>
    )
};