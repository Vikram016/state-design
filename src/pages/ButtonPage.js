import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/button";

function ButtonPage() {
 const handleClick = () => {};   

return (
 <div>
    <div>
        <Button 
        secondary 
        rounded 
        outline 
        className="mb-5" 
        onClick={handleClick}
        >
        <GoBell />
         Click me!!
        </Button>
    </div>
    <div>
        <Button danger outline onMouseLeave={handleClick}>
            <GoCloudDownload/>
            Buy Now!
            </Button>
    </div>
    <div>
        <Button warning onMouseenter={handleClick}>
            < GoDatabase />
            See Deal!
            </Button>
    </div>
    <div>
        <Button secondary outline>Hide Ads!</Button>
    </div>
    <div>
        <Button primary rounded> Something! </Button>
    </div>
 </div>
    );
}

export default ButtonPage;