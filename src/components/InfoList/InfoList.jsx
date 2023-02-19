import { InfoListItems } from "components/InfoListItems/InfoListItems";

export function InfoList({ infos }) {
    return (
        <ul>
            {infos.length ? (
                infos.map(info => (
                    <InfoListItems
                        key={info.id}
                        info={info}
                    />
                ))) : (<h1>scrrr</h1>
            )
            }
        </ul>
    )
};