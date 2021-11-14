import Card from "./Card"
import Filter from "./Filter";

let Content = ({props}) => {
    return (
        <div className="content">
            <Filter items={props.tags} clear={props.clear}/>
            {props.data.map((item, index) =>
                <Card
                    button={props.button}
                    onButton={props.onButton}
                    item={item}
                    key={index}
                    onTag={props.onTag}
                />)}
        </div>
    )
}

export default Content