import { Button } from "@/components/ui/button";
import ButtonShop from "@/components/ui/ButtonShop";

export default function Buttons() {
    return (
        <div className="flex flex-col items-start gap-2">
            <Button variant="default" >See product</Button >
            <Button variant="primary" >See product</Button >
            <Button variant="secondary" >See product</Button >
            <ButtonShop />
        </div>
    )
}
