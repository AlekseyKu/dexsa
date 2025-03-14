import React, {useState} from 'react';
import TitleCover from "../heading/title-cover/TitleCover";
import {dsnCN} from "../../hooks/helper";

function FilterPortfolio({className, categories, actionFilter}) {
    const [active, setActive] = useState(0);


    const getActive = ($key) => {
        return Number.parseInt($key, 10) === active ? 'active' : '';
    }

    const handleButton = (e, $index, cat) => {

        setActive($index + 1);
        actionFilter(cat);
    }


    return (
        <div className={dsnCN('dsn-filtering', className)}>
            <TitleCover className="text-center" from={{y: 10, opacity: 0}}>Portfolio</TitleCover>
            <div className="filtering-wrap">
                <div className="filtering">
                    <div className="selector"/>
                    <button type="button" className={getActive(0)} onClick={e => handleButton(e, -1, "")}>
                        All
                    </button>
                    {
                        categories && categories.map((cat, i) =>
                            <button
                                key={i} type="button"
                                className={getActive(i + 1)}
                                onClick={e => handleButton(e, i, `.${cat.toLowerCase()}`)}>
                                {cat}
                            </button>)
                    }

                </div>
            </div>
        </div>
    );
}

export default FilterPortfolio;