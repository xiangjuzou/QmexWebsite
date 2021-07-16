import React, { Fragment } from 'react';
import CFLoader from './CFLoader';
import { Link } from 'react-router-dom';
import { CgArrowDownO } from 'react-icons/cg';
import { MdKeyboardArrowRight } from 'react-icons/md';


// props:
// - content       : app.state["MenuItems"] (met fields)
// - slug          : deel van de url kan hoofdmenu slug zijn of product slug. ("fridges" of "fridges/coolefridge")
// - statecallback : callback functie om state in APP.jsx op te slaan.
function ProductsSidemenu(props) {

    const arrowDown = <CgArrowDownO size="1.2em" className="sidemenu_arrow " />;
    const arrowRight = <MdKeyboardArrowRight size="1.1em" className="text-danger mr-1" />;

    if (!props.content) {
        CFLoader.LoadProductMenu(props.statecallback);
        return <div>Loading...</div>
    }

    const getLink = (item, children) => {
        return <Link className="sidemenulink" to={"/products/" + item.pageSlug}>{children}</Link>
    }

    const getItem = (item, level) => {
        switch (level) {
            case 1:
                return getLink(item, <h6 className="my-4" style={{ fontWeight:'800' }}>{item.menuTitle}</h6>);
            case 2:
                return getLink(item, <div className="py-2">{arrowRight} {item.menuTitle}</div>);
            default: // dus 3 en everder
                return getLink(item, <Fragment className="py-1">{arrowRight} {item.menuTitle}</Fragment>);
        }
    };

    const parseItem = (item, level) => {
        const cn = (level === 1) ? "" : "pl-3";

        const propslug = props.slug.toLowerCase();
        const pageslug = item.pageSlug.toLowerCase();

        if (level === 3 && propslug.split('/')[1] !== pageslug.split('/')[1]) {
            return <Fragment />;
        } else {
            if (level === 2 && propslug.split('/')[0] !== pageslug.split('/')[0]) {
                return <Fragment />;
            } else {
                return (
                    <div>
                        {getItem(item, level)}
                        <div className={cn}>
                            {item.subMenus?.map((mi) => parseItem(mi.fields, level + 1))}
                        </div>
                    </div>
                );
            }
        }
    };

    return (
        <div className='border-right border-light border-2 pr-2 mt-5'>

            <h3 id="side_titel" className="border-bottom border-light border-2 pb-1 font-weight-bold "> {arrowDown} PRODUCTEN </h3>

            <div id="hoofd-items" className="mt-4 pt-1">
                {props.content[0].fields.subMenus.map((mi) => parseItem(mi.fields, 1))}
            </div>
        </div>
    );
}
    
   
export default ProductsSidemenu;