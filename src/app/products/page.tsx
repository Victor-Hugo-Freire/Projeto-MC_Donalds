import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
    return ( <div className="p-5 border-red-500 rounded-xl">
        <h1 className="text-red-500">Product page</h1>
        <Button>FSW 7.0</Button>
        <Input placeholder="Bora Bill" />
    </div> );
}
 
export default ProductPage;
