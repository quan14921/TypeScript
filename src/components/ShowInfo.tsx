type ShowInfoProps = {
    name: string,
    age: number
}

const ShowInfo = (props: ShowInfoProps) => {
    return <div>
        {props.name}-{props.age}
    </div>
};
export default ShowInfo;