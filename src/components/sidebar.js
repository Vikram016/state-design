import Link from "./Link";

function Sidebar () {
    const links = [
        {label:'Dropdown', path:'/'},
        {label:'Accordion', path:'/accordion'},
        {label:'Buttons', path:'/buttons'},
        {label:'Modal', path:'/modal'},
    ];

    const renderedLinks = links.map( (links) => {
        return ( 
        <Link 
        key={links.label} 
        to={links.path} 
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500"
        > 
        {links.label} 
        </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col item-start">
        {renderedLinks}
        </div>
    );
}


export default Sidebar; 