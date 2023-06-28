import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
const Footer: FC = () => {
    return<>
    <div className="bg-[#27374D] text-[#DDE6ED] text-center w-screen fixed bottom-0 xl:text-sm 2xl:text-lg p-1"> <FontAwesomeIcon icon={faCopyright} /> Copyright: Nattapatpon 2023. </div>
    </>
}
export {Footer};