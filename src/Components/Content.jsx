import Card from "./Card"
import Filter from "./Filter";
import {createBrowserHistory} from "history";
import {useEffect} from "react";
import qs from "qs";

let Content = ({props}) => {

    let url = "/" + props.title.split(' ').join('').toLowerCase()

    const history = createBrowserHistory();
    const filterParams = history.location.hash.substr(history.location.hash.split("").indexOf("=") - 1);
    const filtersFromParams = qs.parse(filterParams);
    useEffect(() => {
        function checkUrlForTags() {
            try {
                if (filtersFromParams.s) {
                    props.setTags(filtersFromParams.s.split(" "));
                }
            } catch (err) {
                console.error(err)
            }
        }
        checkUrlForTags()
    }, []);
    useEffect(() => {
        if (props.tags.length !== 0) {
            history.push(`#${url}?tags=${props.tags.join(' ')}`);
        } else {
            history.push(`${history.location.hash}`)
        }
    }, [props.tags]);

    let mainData = props.data

    if (props.tags.length) {
        mainData = props.data.filter(item => item.tags.find(i => props.tags.includes(i)))
    }

    return (
        <div className="content">
            <Filter url={url} items={props.tags} clear={props.clear}/>

            {mainData.map((item, index) =>
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